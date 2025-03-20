import React from "react";

const CreateDepartment = () => {
  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new department
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
            </div>

            <button
              type='button'
              className='px-[26px] py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
            >
              Create Department
            </button>
          </form>
        </div>
      </>
    </section>
  );
};

export default CreateDepartment;
