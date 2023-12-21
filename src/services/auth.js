import { instanceAxios } from "./axios";

const checkAuth = () => {
    /*  Getting token value stored in localstorage, if token is not present we will open login page for all internal dashboard routes  */
    instanceAxios.interceptors.request.use(
        function (config) {
            document.body.classList.add("loading-indicator");
            const accessToken = localStorage.getItem("token");
            if (accessToken) {
                config.headers["Content-Type"] = "application/json";
                config.headers["Authorization"] = `Bearer ${accessToken}`;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instanceAxios.interceptors.response.use(
        function (response) {
            document.body.classList.remove("loading-indicator");
            return response;
        },
        async function (error) {
            document.body.classList.remove("loading-indicator");
            return Promise.reject(error);
        }
    );

    return localStorage.getItem("access_token");
};

export default checkAuth;
