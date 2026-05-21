interface BlacklistEntry {
    ip: string;
    reason: string;
    createdAt: number;
}

export class IpBlacklistService {
    private static blacklist = new Map<string, BlacklistEntry>();

    static add(ip: string, reason: string) {
        this.blacklist.set(ip, {
            ip,
            reason,
            createdAt: Date.now(),
        });

        console.log("⛔ IP BLACKLISTED:", ip, reason);
    }

    static isBlocked(ip: string): boolean {
        return this.blacklist.has(ip);
    }

    static get(ip: string) {
        return this.blacklist.get(ip);
    }

    static remove(ip: string) {
        this.blacklist.delete(ip);
    }

    static getAll() {
        return Array.from(this.blacklist.values());
    }
}