import modem from "../modem";

//data is callback from front end and it recieves all the payload 
export const getApi = async (data) => {
  const newPro = modem.post('/api',data).then((res) => {
    return res.data;
  });

  return newPro;
};

export const getlogin = async (data) => {
  const newPro = modem.post("/login", data).then((res) => {
    return res.data;
  });

  return newPro;
};
