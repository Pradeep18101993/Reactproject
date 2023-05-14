import modem from "../modem";

export const getApi = async () => {
  const newPro = modem.get('/api').then((res) => {
    return res.data;
  });

  return newPro;
};
