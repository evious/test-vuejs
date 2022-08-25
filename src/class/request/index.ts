export const https = () => {

    const get = async (url : string, header : any) => {
        const confData: any = {            
            "body": null,
            "method": "GET",
            "mode": "cors",
        }

        if (header) confData.headers = header;

        return await fetch(url, confData);
    }

    const post = async (url : string, data : any) => {
        return await fetch(url, data);
    }

    return {
        get, post
    }
}