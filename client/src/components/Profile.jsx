import { useEffect, useRef } from "react";
import UserStore from "../../store/UserStore";
import SubmitButton from "./SubmitButton";
import { useParams } from "react-router-dom";
import { ErrorToast, formatDate, IsEmpty } from "../helper/helper";
const Profile = () => {
  let {
    updateSingleUser,
    loadingRequest,
    singleUsersRequest,
    singleUser,
    logoutRequest,
  } = UserStore();
  let { nameRef, passwordRef, emailRef } = useRef();

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      await singleUsersRequest(id);
    })();
  }, [id, singleUsersRequest]);

  let submitUpdateUser = async () => {
    let name = nameRef.value;
    let password = passwordRef.value;
    let email = emailRef.value;

    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else if (IsEmpty(password)) {
      ErrorToast("Password is required. ");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Email is required. ");
      return;
    } else {
      let result = await updateSingleUser({
        name,
        password,
        email,
      });
      if (result) {
        await logoutRequest();
      }
    }
  };

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Update user
          </h1>

          <div className='grid grid-cols-12 gap-[40px]'>
            <div className='col-span-6 mb-4'>
              <div className='grid gap-2'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='name' className='text-gray-600'>
                    Name:
                  </label>
                  <input
                    ref={(input) => (nameRef = input)}
                    defaultValue={singleUser?.name}
                    id='name'
                    type='text'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                  />
                </div>
                <div className='w-full grid gap-1'>
                  <label htmlFor='email' className='text-gray-600'>
                    Email:
                  </label>
                  <input
                    ref={(input) => (emailRef = input)}
                    defaultValue={singleUser?.email}
                    id='email'
                    type='email'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                  />
                </div>
                <div className='w-full grid gap-1'>
                  <label htmlFor='password' className='text-gray-600'>
                    Password:
                  </label>
                  <input
                    ref={(input) => (passwordRef = input)}
                    id='password'
                    type='password'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                  />
                </div>
              </div>
            </div>
            <div className='col-span-6 mb-4'>
              <div>
                <h2 className='text-[22px] font-bold text-gray-700 border-b'>
                  Profile Information:
                </h2>
                <div className='pt-[20px]'>
                  <ul className='grid gap-2'>
                    <li className='grid gap-[1px]'>
                      <span className='font-semibold'>Name:</span>
                      <span>{singleUser?.name}</span>
                    </li>
                    <li className='grid gap-[1px]'>
                      <span className='font-semibold'>Email:</span>
                      <span>{singleUser?.email}</span>
                    </li>
                    <li className='grid gap-[1px]'>
                      <span className='font-semibold'>Create Date:</span>
                      <span> {formatDate(singleUser?.createdAt)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <SubmitButton
            text='Update Profile'
            type='submit'
            submitFun={submitUpdateUser}
            isSubmitting={loadingRequest}
          />
        </div>
      </>
    </section>
  );
};

export default Profile;
