import axios from "axios"; // Make sure to import axios if you haven't already

export const getlogout = async (token) => {
  try {
    // Make a POST request to the '/logout' endpoint with the token in the request headers
    //this token recieved from frontend will sent to backend and verified using jwt .verify method
    const response = await axios.post("http://localhost:5000/logout", null, {
      headers: {
        Authorization: token,
      },
      responseType: "text",
    });

    // No need to return anything here as the logout process is handled on the server-side
  } catch (error) {
    // Handle any errors that may occur during logout
    console.error("Logout error:", error);
    throw error;
  }
};
