import geoip from "geoip-lite";

export interface GeoLocationData {
    ip: string;
    country?: string;
    region?: string;
    city?: string;
    ll?: [number, number];
    timezone?: string;
}

export class GeoLocationService {
    static lookup(ip: string): GeoLocationData {
        try {
            const cleanIp = ip.replace("::ffff:", "");

            const geo = geoip.lookup(cleanIp);

            if (!geo) {
                return {
                    ip: cleanIp,
                };
            }

            return {
                ip: cleanIp,
                country: geo.country,
                region: geo.region,
                city: geo.city,
                ll: geo.ll,
                timezone: geo.timezone,
            };
        } catch (error) {
            return {
                ip,
            };
        }
    }
}