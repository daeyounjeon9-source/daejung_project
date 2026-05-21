export interface SecurityLog {
    type: string;
    ip: string;
    message: string;
    level: "INFO" | "WARNING" | "CRITICAL";
    createdAt: number;
}

export class SecurityLogService {
    private static logs: SecurityLog[] = [];

    static add(
        log: SecurityLog
    ) {
        this.logs.unshift(log);

        // 최대 5000개 유지
        if (this.logs.length > 5000) {
            this.logs.pop();
        }

        console.log(
            `🔐 SECURITY LOG [${log.level}]`,
            log.message
        );
    }

    static getAll() {
        return this.logs;
    }

    static getCritical() {
        return this.logs.filter(
            (x) => x.level === "CRITICAL"
        );
    }
}