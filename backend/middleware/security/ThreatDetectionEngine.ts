import { Request } from "express";

export interface ThreatResult {
    blocked: boolean;
    riskScore: number;
    reason: string[];
}

export class ThreatDetectionEngine {
    static analyze(req: Request): ThreatResult {
        const reasons: string[] = [];

        let score = 0;

        const userAgent = req.headers["user-agent"] || "";
        const url = req.originalUrl || "";
        const body = JSON.stringify(req.body || {});
        const query = JSON.stringify(req.query || {});

        // SQL Injection 탐지
        const sqlPatterns = [
            "SELECT ",
            "DROP TABLE",
            "UNION",
            "' OR '1'='1",
            "--",
        ];

        for (const pattern of sqlPatterns) {
            if (
                url.toUpperCase().includes(pattern) ||
                body.toUpperCase().includes(pattern) ||
                query.toUpperCase().includes(pattern)
            ) {
                score += 40;
                reasons.push("SQL_INJECTION_DETECTED");
            }
        }

        // XSS 탐지
        const xssPatterns = [
            "<script>",
            "javascript:",
            "onerror=",
            "alert(",
        ];

        for (const pattern of xssPatterns) {
            if (
                body.toLowerCase().includes(pattern) ||
                query.toLowerCase().includes(pattern)
            ) {
                score += 35;
                reasons.push("XSS_ATTACK_DETECTED");
            }
        }

        // Bot 탐지
        const badBots = [
            "curl",
            "python",
            "wget",
            "postman",
            "scanner",
        ];

        for (const bot of badBots) {
            if (userAgent.toLowerCase().includes(bot)) {
                score += 20;
                reasons.push("BOT_ACTIVITY_DETECTED");
            }
        }

        // 관리자 경로 공격
        if (
            url.includes("/admin") &&
            userAgent.length < 10
        ) {
            score += 30;
            reasons.push("ADMIN_ATTACK_PATTERN");
        }

        return {
            blocked: score >= 50,
            riskScore: score,
            reason: reasons,
        };
    }
}