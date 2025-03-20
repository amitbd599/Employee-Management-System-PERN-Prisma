import { Select, Option } from "@material-tailwind/react";

const CreateEmployee = () => {
  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new employee
          </h1>

          <form>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='firstName' className='text-gray-600'>
                  First Name:
                </label>
                <input
                  id='firstName'
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
              <div className='w-full grid gap-1'>
                <label htmlFor='Email' className='text-gray-600'>
                  Last Name:
                </label>
                <input
                  id='lastName'
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='email' className='text-gray-600'>
                  Email:
                </label>
                <input
                  id='email'
                  type='email'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
              <div className='w-full grid gap-1'>
                <label htmlFor='phone' className='text-gray-600'>
                  Phone:
                </label>
                <input
                  id='phone'
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='salary' className='text-gray-600'>
                  Salary:
                </label>
                <input
                  id='salary'
                  type='number'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
              <div className=' w-full'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='department' className='text-gray-600'>
                    Department:
                  </label>
                  <Select label='Select Version'>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
              </div>
              <div className=' w-full'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='Role' className='text-gray-600'>
                    Role:
                  </label>
                  <Select label='Select Version'>
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
              </div>
            </div>

            <button
              type='button'
              className='px-[26px] py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
            >
              Create Employee
            </button>
          </form>
        </div>
      </>
    </section>
  );
};

export default CreateEmployee;
