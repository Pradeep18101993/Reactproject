import axios from "axios";

const defaultOptions = {
  baseURL: "http://localhost:5000",

  headers: {
    "Content-Type": "application/json",

    "Access-Control-Allow-Origin": "*",
  },

  crossOrigin: true,
};
const instance = axios.create(defaultOptions);

// instance.interceptors.request.use((config) => {
//   if (localStorage.getItem("AuthorizationToken") === null) {
//     config.headers.Authorization = null;
//   } else {
//     try {
//       const token = JSON.parse(localStorage.getItem("AuthorizationToken"));

//       config.headers.Authorization = `Bearer ${token.token}`;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return config;
// });
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       window.location = "/";
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default instance;