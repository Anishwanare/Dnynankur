import React, { useState } from "react";

import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);

  const [showPassword, setShowPassword] = useState(false);
  const handleOnClickShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
     if (data.password.length < 7) {
       alert("Password Should greater than 7");
       return;
     }

     if (data.password !== data.confirmPassword) {
       alert("Passwords not match");
       return;
     }
    // Your login logic here
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 md:px-0 bg-gray-100">
      <div
        className="m-5 md:m-0 p-6 w-full  rounded-xl shadow-lg bg-white flex flex-col md:w-1/3 gap-5 md:gap-8"
        // style={{ backgroundColor: "#FCE0FE" }}
      >
        <h2 className="text-2xl font-semibold text-center text-purple-700 md:text-5xl">
          Sign Up
        </h2>
        <hr className="border border-purple-600" />
        <form
          className="flex flex-col gap-3 md:gap-8 md:text-2xl "
          onSubmit={handleOnSubmit}
        >
          <div className="">
            <label
              htmlFor="username"
              className="md:text-3xl block font-semibold mb-1"
            >
              Username:
            </label>
            <input
              required
              type="text"
              name="name"
              id="username"
              placeholder="Username"
              className="w-full p-2 border rounded focus:outline-none focus:border-purple-700"
              onChange={handleOnChange}
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="md:text-3xl block font-semibold mb-1"
            >
              Email:
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border rounded focus:outline-none focus:border-purple-700"
              onChange={handleOnChange}
            />
          </div>
          <div className="relative flex flex-col gap-3">
            <label className="block text-2xl font-medium mb-1 md:text-3xl ">
              Password:
            </label>
            <div className="flex items-center">
              <input
                onChange={handleOnChange}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="w-full p-3  rounded border focus:outline focus:border-purple-600 "
                required
              />
              <span
                className="absolute right-3 cursor-pointer md:text-3xl"
                onClick={handleOnClickShowPassword}
              >
                {/* {showPassword ? <BiSolidHide /> : <BiSolidShow />} */}
              </span>
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <label className="block text-2xl font-medium mb-1 md:text-3xl ">
             Confirm Password:
            </label>
            <div className="flex items-center">
              <input
                onChange={handleOnChange}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                className="w-full p-3  rounded border focus:outline focus:border-purple-600 "
                required
              />
              <span
                className="absolute right-3 cursor-pointer md:text-3xl"
                onClick={handleOnClickShowPassword}
              >
                {showPassword ? <BiSolidHide /> : <BiSolidShow />}
              </span>
            </div>
          </div>
          <div className=" text-center">
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 focus:outline-none md:text-4xl"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
