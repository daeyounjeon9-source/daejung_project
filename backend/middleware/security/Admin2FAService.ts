import crypto from "crypto";

interface TwoFactorEntry {
    code: string;
    expiresAt: number;
}

export class Admin2FAService {
    private static codes =
        new Map<string, TwoFactorEntry>();

    // 6자리 코드 생성
    static generateCode(email: string) {
        const code = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        this.codes.set(email, {
            code,
            expiresAt:
                Date.now() + 5 * 60 * 1000,
        });

        console.log(
            "🔐 ADMIN 2FA CODE:",
            email,
            code
        );

        return code;
    }

    static verifyCode(
        email: string,
        code: string
    ) {
        const entry =
            this.codes.get(email);

        if (!entry) {
            return false;
        }

        if (Date.now() > entry.expiresAt) {
            this.codes.delete(email);
            return false;
        }

        const valid =
            entry.code === code;

        if (valid) {
            this.codes.delete(email);
        }

        return valid;
    }

    static generateBackupKey() {
        return crypto
            .randomBytes(32)
            .toString("hex");
    }
}