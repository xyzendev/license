import axios, { AxiosResponse } from "axios";

const fetch = async (url: string): Promise<any> => {
    try {
        const res: AxiosResponse = await axios.get(url);

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export { fetch };
