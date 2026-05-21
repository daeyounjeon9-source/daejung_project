import crypto from "crypto";

export interface WalletValidationResult {
    valid: boolean;
    signature: string;
    reason?: string;
}

export class WalletTamperProtection {
    private static SECRET =
        process.env.WALLET_SECRET ||
        "ULTRA_SECURE_WALLET_SECRET";

    static createSignature(
        userId: string,
        balance: number
    ) {
        return crypto
            .createHmac("sha256", this.SECRET)
            .update(`${userId}:${balance}`)
            .digest("hex");
    }

    static validate(
        userId: string,
        balance: number,
        signature: string
    ): WalletValidationResult {
        const expected = this.createSignature(
            userId,
            balance
        );

        if (expected !== signature) {
            return {
                valid: false,
                signature: expected,
                reason: "WALLET_TAMPERING_DETECTED",
            };
        }

        return {
            valid: true,
            signature: expected,
        };
    }
}