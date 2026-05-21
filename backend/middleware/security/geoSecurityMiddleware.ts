import { Request, Response, NextFunction } from "express";
import { GeoLocationService } from "../../security/GeoLocationService";

const BLOCKED_COUNTRIES = [
    "RU",
    "KP",
];

const ADMIN_ALLOWED_COUNTRIES = [
    "KR",
];

export const geoSecurityMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const forwarded = req.headers["x-forwarded-for"];

        const ip =
            typeof forwarded === "string"
                ? forwarded.split(",")[0]
                : req.socket.remoteAddress || "0.0.0.0";

        const geo = GeoLocationService.lookup(ip);

        (req as any).geoData = geo;

        console.log("🌍 GEO SECURITY:", geo);

        // 위험 국가 차단
        if (
            geo.country &&
            BLOCKED_COUNTRIES.includes(geo.country)
        ) {
            return res.status(403).json({
                success: false,
                message: "Blocked country access",
            });
        }

        // 관리자 페이지 국가 제한
        if (
            req.originalUrl.includes("/admin") &&
            geo.country &&
            !ADMIN_ALLOWED_COUNTRIES.includes(geo.country)
        ) {
            return res.status(403).json({
                success: false,
                message: "Admin access denied by region",
            });
        }

        next();
    } catch (error) {
        console.error("Geo Security Error:", error);
        next();
    }
};