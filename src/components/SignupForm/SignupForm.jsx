import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./SignupForm.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignupForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { signup } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();

    signup(state);
  };

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    // console.log(state);
  };

  return (
    <div>
      <h1 className={styles.header}>SignUp</h1>
      <div className={styles.wrapper}>
        <form className={styles.login} onClick={onSubmit}>
          <Input
            type="text"
            id="email"
            name="email"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
          <Button type="submit">Sing Up</Button>
          <div>
            Already have an account?<Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
