import { fetch } from "./fetch";

interface VersionResponse {
    version: string;
    author: string;
}

class Checker {
    async check(v: string, a: string): Promise<boolean> {
        try {
            const { version, author }: VersionResponse = await fetch('https://api.xyzen.tech/version/bot?q=1.0rc');

            return a === author && v === version;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

export { Checker };
