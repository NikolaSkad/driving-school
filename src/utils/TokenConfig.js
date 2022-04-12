import TokenStorage from "./TokenStorage";

export default () => {
  const token = TokenStorage.getToken();
  const config = {
    headers: {
      "x-auth-token": token,
    },
  };
  return config;
};
