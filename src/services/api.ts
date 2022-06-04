import axios from "axios";

export const Api = axios.create({
    baseURL: `${window.location.href}api`,
});
