import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const registerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { email, password } = admin;
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();

    const message = JSON.stringify(data);
    if (data) {
      // console.log(data)
      if (message === `{"message":"User sigin successfully"}`) {
        // if(user.email  && user.password ){
        //         setValid(true);
        // }
        // setSubmitted(true);
        toast.success(message);
        // console.log(message);
        navigate("/adminTab/createuser");
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <>
      <div className="l-form">
        <form className="form">
          <h1 className="form__title">Sign In</h1>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="email"
              value={admin.email}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="password"
              value={admin.password}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Password
            </label>
          </div>
          <input
            type="submit"
            className="form__button"
            value="Sign In"
            name="submit"
            onClick={postData}
          />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Login;
