type SuspiciousRequest = {
    ip: string;
    count: number;
    lastRequest: number;
};

const suspiciousMap: Record<string, SuspiciousRequest> = {};

const REQUEST_LIMIT = 30;
const TIME_WINDOW = 10 * 1000;

export function detectThreat(ip: string) {
    const now = Date.now();

    if (!suspiciousMap[ip]) {
        suspiciousMap[ip] = {
            ip,
            count: 1,
            lastRequest: now,
        };

        return false;
    }

    const diff = now - suspiciousMap[ip].lastRequest;

    if (diff < TIME_WINDOW) {
        suspiciousMap[ip].count += 1;
    } else {
        suspiciousMap[ip].count = 1;
    }

    suspiciousMap[ip].lastRequest = now;

    if (suspiciousMap[ip].count > REQUEST_LIMIT) {
        console.log("🚨 Suspicious Activity Detected:", ip);

        return true;
    }

    return false;
}