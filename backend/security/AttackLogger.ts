import fs from "fs";
import path from "path";

const logPath = path.join(__dirname, "../logs/attacks.log");

export function logAttack(ip: string) {
    const time = new Date().toISOString();

    const log = `[${time}] Suspicious IP: ${ip}\n`;

    fs.appendFileSync(logPath, log);

    console.log("📝 Attack Logged:", ip);
}