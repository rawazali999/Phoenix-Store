import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../app/slices/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(form.username));
    navigate("/", { replace: true });
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  }
  return (
    <section
      id="login"
      className=" w-screen h-screen bg-custom1 grid place-items-center"
    >
      <div className="flex flex-col  mb-10">
        <div className="flex flex-col items-center p-4 text-white">
          <div>
            <Link to="/" className=" pt-2">
              <Tooltip title="Back to home">
                <ArrowBackIcon />
              </Tooltip>
            </Link>
          </div>
          <div className=" flex justify-center items-center font-bold mb-2 mx-2">
            <h1 className="text-xl">Sign in Online Store</h1>
            <img
              className="w-10  h-auto"
              src={require("../images/shopping-cart.png")}
              alt="logo"
            />
          </div>{" "}
        </div>
        <div className=" flex flex-col  p-6 shadow-lg rounded-md bg-custom4 border-0">
          <form onSubmit={submitHandler}>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-custom1  text-xs font-bold mb-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                className="border-0 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="John Doe"
                style={{ transition: "all .15s ease" }}
                name="username"
                onChange={onChangeHandler}
                value={form.username || ""}
              />
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-custom1  text-xs font-bold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="border-0 px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="**********"
                style={{ transition: "all .15s ease" }}
                name="password"
                value={form.password || ""}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  id="customCheckLogin"
                  type="checkbox"
                  className="form-checkbox border-0 rounded text-custom1  ml-1 w-5 h-5"
                  style={{ transition: "all .15s ease" }}
                />
                <span className="ml-2 text-sm font-semibold text-custom1">
                  Remember me
                </span>
              </label>
            </div>

            <div className="flex justify-center mt-2  text-xs underline">
              <div className=" my-2">
                <Link to="/signup" className="text-gray-900">
                  Don't have an account? Sign up
                </Link>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                className=" bg-custom1  text-white active:bg-white  text-md font-bold uppercase px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none  w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
