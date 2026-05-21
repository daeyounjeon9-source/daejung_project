import jwt from "jsonwebtoken";
import crypto from "crypto";

export interface SecureTokenPayload {
    userId: string;
    role: string;
    ip: string;
    userAgent: string;
    sessionId: string;
}

export class SecureTokenService {
    private static SECRET =
        process.env.JWT_SECRET ||
        "ULTRA_SECURE_JWT_SECRET";

    static generateSessionId() {
        return crypto.randomBytes(32).toString("hex");
    }

    static createToken(
        payload: SecureTokenPayload
    ) {
        return jwt.sign(payload, this.SECRET, {
            expiresIn: "2h",
        });
    }

    static verifyToken(token: string) {
        try {
            return jwt.verify(
                token,
                this.SECRET
            ) as SecureTokenPayload;
        } catch (error) {
            return null;
        }
    }
}