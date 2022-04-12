import React, { memo, useState, useContext, useEffect } from "react";
import Auth from "../api/Auth";
import TokenStorage from "../utils/TokenStorage";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const signup = async (params) => {
    try {
      const response = await Auth.signup(params);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (params) => {
    try {
      const response = await Auth.login(params);
      TokenStorage.storeToken(response.data.token);
      setIsLoggenIn(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setIsLoggenIn(false);
    }
  };

  const logout = async () => {
    TokenStorage.deleteToken();
    setIsLoggenIn(false);
    setCurrentUser({});
  };

  const authenticate = async () => {
    setIsLoading(true);

    try {
      const response = await Auth.authenticate();
      setCurrentUser(response.data.user);
      setIsLoggenIn(true);
    } catch (error) {
      setCurrentUser({});
    }

    setIsLoading(false);
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, isLoggenIn, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const memoizedProvider = memo(AuthProvider);
export { memoizedProvider as AuthProvider };
