/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import "./LoginFormStyle.css";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminLoginForm({ setAuthToken, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
  // const errorBox = useRef(null);

  function handleCloseError() {
    setError(false);
  }

  useEffect(
    function () {
      // console.log(loggedIn);
      if (loggedIn) navigate("/cms");
      else navigate("/login");
    },
    [loggedIn, navigate]
  );

  async function handleLogin(data) {
    const { email: username, password } = data;
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/login", {
        username,
        password,
      });
      const { token } = response.data;
      // console.log(token);
      setAuthToken(token);
      localStorage.setItem("token", token);
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <div className="form-box">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-heading">
          <HiOutlineLockClosed className="lock-icon" />
          <h1 className="heading-h2-size">Log in to your account</h1>
        </div>
        <input
          type="text"
          placeholder="Admin ID"
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
      <div className={`error-box ${error ? "" : "hidden"}`}>
        <div className="user-form-error-msg">{error}</div>
        <button onClick={handleCloseError} className="error-close-btn">
          Ok
        </button>
      </div>
    </div>
  );
}

export default AdminLoginForm;
