interface RequestEntry {
    count: number;
    firstRequest: number;
    lastRequest: number;
}

export class RateLimitEngine {
    private static requests = new Map<string, RequestEntry>();

    private static WINDOW_MS = 10 * 1000; // 10초
    private static MAX_REQUESTS = 120;

    static check(ip: string) {
        const now = Date.now();

        const existing = this.requests.get(ip);

        if (!existing) {
            this.requests.set(ip, {
                count: 1,
                firstRequest: now,
                lastRequest: now,
            });

            return {
                blocked: false,
                remaining: this.MAX_REQUESTS - 1,
            };
        }

        // 시간 지나면 초기화
        if (now - existing.firstRequest > this.WINDOW_MS) {
            this.requests.set(ip, {
                count: 1,
                firstRequest: now,
                lastRequest: now,
            });

            return {
                blocked: false,
                remaining: this.MAX_REQUESTS - 1,
            };
        }

        existing.count += 1;
        existing.lastRequest = now;

        this.requests.set(ip, existing);

        return {
            blocked: existing.count > this.MAX_REQUESTS,
            remaining: Math.max(
                0,
                this.MAX_REQUESTS - existing.count
            ),
            total: existing.count,
        };
    }

    static cleanup() {
        const now = Date.now();

        for (const [ip, data] of this.requests.entries()) {
            if (now - data.lastRequest > this.WINDOW_MS * 3) {
                this.requests.delete(ip);
            }
        }
    }
}

// 자동 메모리 정리
setInterval(() => {
    RateLimitEngine.cleanup();
}, 30000);