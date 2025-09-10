import axios from "axios";

const BASE_URL = "http://192.168.100.13:8001"   
// const BASE_URL = "http://admin.elevorce.com"

export const Contact = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/contact-us`, data);
        return response.data; // { status: true/false, message: "..." }
    } catch (error) {
        return { status: false, message: "Something went wrong" };
    }
};
