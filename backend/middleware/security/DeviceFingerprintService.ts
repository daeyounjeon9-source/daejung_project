import crypto from "crypto";

export interface DeviceFingerprint {
    hash: string;
    browser: string;
    platform: string;
    language: string;
}

export class DeviceFingerprintService {
    static generate(req: any): DeviceFingerprint {
        const userAgent =
            req.headers["user-agent"] || "";

        const language =
            req.headers["accept-language"] || "";

        const platform =
            req.headers["sec-ch-ua-platform"] || "";

        const raw = `${userAgent}:${language}:${platform}`;

        const hash = crypto
            .createHash("sha256")
            .update(raw)
            .digest("hex");

        return {
            hash,
            browser: userAgent,
            platform,
            language,
        };
    }
}