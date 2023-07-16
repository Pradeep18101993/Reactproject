import modem from "../modem";

//data is callback from front end and it recieves all the payload
export const getApi = async (data) => {
  const newPro = modem.post("/api", data).then((res) => {
    return res.data;
  });

  return newPro;
};

export const getlogin = async (data) => {
  try {
    const response = await modem.post("/login", data);
    // console.log(response, "response");
    const token = response.data.token;

    // Set the token in localStorage after a successful login
    localStorage.setItem("accessToken", token);

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const homepage = async (token) => {
  try {
    const response = await modem.get("/home", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response, "response of api");
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // or you can return an error message or handle the error as needed
  }
};
