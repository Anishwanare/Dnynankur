import React, { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnClickShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" m-5 md:m-0 p-6 w-full  rounded-xl shadow-lg bg-white flex flex-col md:w-1/3  gap-5 md:gap-7">
        <h2 className="text-2xl md:text-5xl font-semibold mb-6 text-center">
          Log in  
        </h2>
        <hr className="border border-purple-600" />
        <form
          className="space-y-4 flex flex-col gap-3 md:gap-7 md:text-2xl"
          onSubmit={handleOnSubmit}
        >
          <div className="relative flex flex-col gap-3">
            <label className="block text-2xl font-medium mb-1 md:text-3xl ">
              Email:
            </label>
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border rounded focus:outline focus:border-purple-600 "
              required
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
                {showPassword ? <BiSolidHide /> : <BiSolidShow />}
              </span>
            </div>
          </div>
          <div className="md:my-10 ">
            <button
              className="w-full py-3 bg-purple-600 text-white rounded hover:bg-purple-700  md:text-3xl "
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
