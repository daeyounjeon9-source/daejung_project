export interface VpnCheckResult {
    isVpn: boolean;
    isTor: boolean;
    isProxy: boolean;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
}

export class VpnDetectionService {
    static analyze(ip: string): VpnCheckResult {
        const cleanIp = ip.replace("::ffff:", "");

        // 로컬 개발환경 제외
        if (
            cleanIp.includes("127.0.0.1") ||
            cleanIp.includes("192.168") ||
            cleanIp === "0.0.0.0"
        ) {
            return {
                isVpn: false,
                isTor: false,
                isProxy: false,
                riskLevel: "LOW",
            };
        }

        // 1차 기본 휴리스틱 탐지
        const suspiciousPatterns = [
            "185.",
            "194.",
            "45.",
            "91.",
        ];

        const suspicious = suspiciousPatterns.some((p) =>
            cleanIp.startsWith(p)
        );

        return {
            isVpn: suspicious,
            isTor: suspicious,
            isProxy: suspicious,
            riskLevel: suspicious ? "HIGH" : "LOW",
        };
    }
}