import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    mobileno: "",
    email: "",
    address: "",
  });

  let name, value;
  const registerInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
      e.preventDefault();
      try{

      const { username, mobileno, email, address } = user;

      const res = await fetch("/adminTab/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          mobileno,
          email,
          address,
        }),
      });

      
            
      const data = await res.json();
      const message = JSON.stringify(data);
      if (data) {
        // console.log(data);
        // console.log(message);
        if (message === `{"message":"User registered successfully"}`) {
          toast.success(message);
          navigate("/adminTab/createuser");
        } else {
          toast.error(message);
        }
      }
    }catch(err){
      console.log(err)
      // navigate('/')
      // window.location.reload();
    }
    
  };

  return (
    <>
      <Navbar />
      <div className="l-form">
        <form action="" className="form">
          <h1 className="form__title">Form</h1>

          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="username"
              pattern="[a-zA-Z0-9]"
              value={user.username}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Username
            </label>
          </div>

          <div className="form__div">
            <input
              type="number"
              className="form__input"
              placeholder=" "
              maxLength={10}
              name="mobileno"
              value={user.mobileno}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Mobile No.
            </label>
          </div>

          <div className="form__div">
            <input
              type="email"
              className="form__input"
              placeholder=" "
              name="email"
              value={user.email}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Email
            </label>
          </div>

          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="address"
              value={user.address}
              onChange={registerInputs}
            />
            <label htmlFor="" className="form__label">
              Address
            </label>
          </div>

          <input
            type="submit"
            className="form__button"
            value="Create User"
            name="submit"
            onClick={postData}
          />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CreateUser;
