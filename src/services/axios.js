import axios from "axios";



class InstanceAxios {
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.BASE_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    static getInstance() {
        if (!InstanceAxios.instance) {
            InstanceAxios.instance = new InstanceAxios();
        }
        return InstanceAxios.instance.instance;
    }
}
export const instanceAxios = InstanceAxios.getInstance();