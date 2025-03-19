import React from "react";

const UpdateUser = () => {
  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Update user
          </h1>

          <form>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Name' className='text-gray-600'>
                  Name:
                </label>
                <input
                  id='Name'
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
              <div className='w-full grid gap-1'>
                <label htmlFor='Email' className='text-gray-600'>
                  Email:
                </label>
                <input
                  id='Email'
                  type='email'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Password' className='text-gray-600'>
                  Password:
                </label>
                <input
                  id='Password'
                  type='password'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
              <div className=' w-full'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='Password' className='text-gray-600'>
                    Password:
                  </label>
                  <select className='border p-2 rounded w-full'>
                    <select className='border p-2 rounded w-full'>
                      <option value='ADMIN'>ADMIN</option>
                      <option value='USER'>USER</option>
                      <option value='MANAGER'>MANAGER</option>
                      <option value='EMPLOYEE'>EMPLOYEE</option>
                      <option value='SUPERVISOR'>SUPERVISOR</option>
                      <option value='DEVELOPER'>DEVELOPER</option>
                    </select>
                  </select>
                </div>
              </div>
            </div>

            <button
              type='button'
              className='px-[26px] py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
            >
              Update User
            </button>
          </form>
        </div>
      </>
    </section>
  );
};

export default UpdateUser;
