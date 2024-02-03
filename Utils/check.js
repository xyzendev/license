const { fetch } = require("./fetch.js");

class Checker {
    async check(v, a) {
        try {
            const { version, author } = await fetch('https://api.xyzen.tech/version/bot?q=1.0rc');

            return a === author && v === version;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = { Checker };
