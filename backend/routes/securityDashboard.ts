import express, {
    Request,
    Response,
} from "express";

import { SecurityLogService }
    from "../security/SecurityLogService";

import { IpBlacklistService }
    from "../security/IpBlacklistService";

const router = express.Router();

router.get(
    "/security-overview",
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const logs =
                SecurityLogService.getAll();

            const criticalLogs =
                SecurityLogService.getCritical();

            const blockedIps =
                IpBlacklistService.getAll();

            return res.json({
                success: true,

                stats: {
                    totalLogs: logs.length,
                    criticalThreats:
                        criticalLogs.length,
                    blockedIps:
                        blockedIps.length,
                },

                recentLogs: logs.slice(0, 50),

                blockedIpList: blockedIps,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
            });
        }
    }
);

export default router;