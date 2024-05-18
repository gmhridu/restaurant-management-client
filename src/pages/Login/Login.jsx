import React from "react";
import loginBg from '../../assets/others/authentication.png'
import leftBg from '../../assets/others/authentication2.png'
import { Link } from "react-router-dom"; 
import { RiGoogleFill } from "react-icons/ri";
import { FaFacebookF, FaGithub } from "react-icons/fa";


const Login = () => {
 const handleLogin = e => {
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password)
 }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="hero-content flex-col md:flex-row border-4 p-20 drop-shadow-2xl rounded-xl"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="space-x-5 w-1/2">
          <img src={leftBg} alt="" className="w-full" />
        </div>
        <div className="card shrink-0 w-full max-w-md">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <h3 className="text-center pb-4 text-[#151515] text-4xl font-semibold">
                Login
              </h3>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input rounded-md w-full bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input rounded-md w-full bg-white"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#D1A054B2] text-white hover:bg-[#674e28b2] border-none"
                type="submit"
                value={"Sign in"}
              />
              <div>
                <p className="text-base font-semibold text-[#D1A054] text-center pt-5">
                  New here?{" "}
                  <Link to={"/register"} className="hover:underline">
                    Create a New Account
                  </Link>
                </p>
                <p className="text-[#444] text-base font-medium text-center pt-2">
                  Or sign in with
                </p>
                <div className="flex gap-x-8 cursor-pointer items-center justify-center py-3">
                  <FaFacebookF className="btn-circle border border-[#444] p-3 hover:hover:bg-[#444] hover:text-white" />
                  <RiGoogleFill className="btn-circle border border-[#444] p-3 hover:hover:bg-[#444] hover:text-white" />
                  <FaGithub className="btn-circle border border-[#444] p-3 hover:bg-[#444] hover:text-white" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
