import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    login(state);
  };

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  return (
    <div>
      <h1 className={styles.header}>LogIn</h1>
      <div className={styles.wrapper}>
        <form className={styles.login} onClick={onSubmit}>
          <Input
            onChange={handleInputChange}
            type="text"
            id="email"
            name="email"
          />
          <Input
            onChange={handleInputChange}
            type="password"
            id="password"
            name="password"
          />
          <Button type="submit">Login</Button>
          <div>
            Need an account?<Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
