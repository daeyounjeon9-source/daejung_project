const blockedIPs = new Set<string>();

export function blockIP(ip: string) {
    blockedIPs.add(ip);

    console.log("⛔ Blocked IP:", ip);
}

export function isBlocked(ip: string) {
    return blockedIPs.has(ip);
}