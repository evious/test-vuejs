import { https } from "./index.ts";

export const fruits = () => {
    const urlFruits = "http://127.0.0.1:8888/api/fruits";
    const get = async () => {
        try {
            const url = await https().get(urlFruits, null);
            const json = await url.json();
            return json.data.fruits;
        } catch (error) {
            return { message: "invalid" };
        }
    };

    return {
        get
    }
};