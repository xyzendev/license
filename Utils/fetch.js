const axios = require("axios");

const fetch = async (url) => {
    try {
        const res = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = { fetch };
