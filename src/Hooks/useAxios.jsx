import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5020/'
})

const useAxios = () => {
    return axiosSecure;
};

export default useAxios