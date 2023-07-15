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
    console.log(response, "response");
    const token = response.data.token;

    // Set the token in localStorage after a successful login
    localStorage.setItem("accessToken", token);

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
