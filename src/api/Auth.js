import axios from "axios";
import routes from "../config/routes";
import TokenConfig from "../utils/TokenConfig";

const authService = axios.create({
  baseURL: `${routes.baseUrl}/auth`,
  withCredentials: true,
});

const signup = async ({ email, name, password }) => {
  return authService.post(routes.auth.signup, { email, name, password });
};

const login = async ({ email, password }) => {
  return authService.post(routes.auth.login, { email, password });
};

const authenticate = async () => {
  return authService.get(routes.auth.authenticate, TokenConfig());
};

export default {
  signup,
  login,
  authenticate,
};
