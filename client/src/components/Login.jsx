import React, { useEffect, useRef } from "react";
import UserStore from "../../store/UserStore";
import { ErrorToast, IsEmpty } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import Cookies from "js-cookie";
const Login = () => {
  let { loginUsersRequest, loadingRequest } = UserStore();
  let { emailRef, passwordRef } = useRef();
  let navigate = useNavigate();
  let token = Cookies.get("Token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  let loginSubmit = async () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmpty(email)) {
      ErrorToast("Email is empty!");
      return;
    } else if (IsEmpty(password)) {
      ErrorToast("Password is empty!");
      return;
    } else {
      let result = await loginUsersRequest({ email, password });
      if (result) {
        navigate("/");
      }
    }
  };

  return (
    <>
      {/* component */}
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
            Sign In
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                ref={(input) => (emailRef = input)}
                type='email'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
                placeholder='your@email.com'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Password
              </label>
              <input
                ref={(input) => (passwordRef = input)}
                type='password'
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
                placeholder='••••••••'
              />
            </div>
            <SubmitButton
              text='Login'
              type='submit'
              submitFun={loginSubmit}
              isSubmitting={loadingRequest}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
