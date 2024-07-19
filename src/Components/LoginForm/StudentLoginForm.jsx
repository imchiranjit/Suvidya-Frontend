/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./LoginFormStyle.css";

function StudentLoginForm({ setAuthToken, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: "",
    },
  });
  useEffect(
    function () {
      if (loggedIn) navigate("/student");
      else navigate("/login");
    },
    [loggedIn, navigate]
  );
  const handleLogin = async (data) => {
    // e.preventDefault();
    console.log(data);
    const [username, password] = data;
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/login", {
        username,
        password,
      });
      const { token } = response.data;
      setAuthToken(token);
      localStorage.setItem("token", token);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
  function onSubmit(data) {
    // console.log(data);
    handleLogin(data);
  }
  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-heading">
          <HiOutlineLockClosed className="lock-icon" />
          <h1 className="heading-h2-size">Log in to your account</h1>
        </div>
        <input
          type="text"
          placeholder="Student ID"
          {...register("email", { required: "true" })}
          id="email"
          className="input"
        />
        {errors.email && <p className="error">This field is required</p>}
        <input
          type="password"
          placeholder="Password"
          id="password"
          {...register("password", { required: "true" })}
          className="input"
        />
        {errors.password && <p className="error">This field is required</p>}
        <button type="submit" className="btn btn-primary login-submit-btn">
          Submit
        </button>
      </form>
      <div className="forget-text text-center">
        <div>
          don&apos;t have an account? <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default StudentLoginForm;
