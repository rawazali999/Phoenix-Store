import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../app/slices/authenticationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <section id="login" className="w-full h-full bg-slate-100 ">
      <div className="flex justify-center">
        <div className="flex items-center justify-center mt-12 h-full">
          <div className=" flex flex-col sm:w-full w-4/5 px-6 py-1 pt-0 mb-6 shadow-lg rounded-3xl bg-zinc-50 border-0">
            <div className="text-center my-3 font-bold">
              <h1 className="text-custom2 text-xl">Sign in Phoenix Store</h1>
              <hr className="mt-2 border-amber-700" />
            </div>
            <form onSubmit={submitHandler}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-yellow-700  text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="username"
                  style={{ transition: "all .15s ease" }}
                  name="username"
                  onChange={onChangeHandler}
                  value={form.username || ''}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-yellow-700  text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  style={{ transition: "all .15s ease" }}
                  name='password'
                  value={form.password || ''}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <label className="flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-yellow-700  ml-1 w-5 h-5"
                    style={{ transition: "all .15s ease" }}
                  />
                  <span className="ml-2 text-sm font-semibold text-yellow-700">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="flex justify-between mt-4  text-xs underline">
                <div className="w-auto my-2">
                  <a
                    href="#href"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-900"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className=" my-2">
                  <Link to="/signup" className="text-gray-900">
                    Don't Have an account?
                    <br /> Sign Up
                  </Link>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-amber-500 text-white active:bg-white   text-md font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="px-6 py-4">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Or Sign in with
                </h6>
              </div>
              <div className="text-center sm:grid grid-cols-1 sm:grid-cols-2  ">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 p-2 rounded-lg outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-lg inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={require("../images/icons8-facebook.svg").default}
                  />
                  Facebook
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-lg inline-flex items-center font-bold text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={require("../images/google.svg").default}
                  />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
