import React, { useEffect, useRef } from "react";
import DepartmentStore from "../../store/DepartmentStore";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDepartment = () => {
  let {
    updateDepartmentRequest,
    getSingleDepartmentRequest,
    singleDepartment,
  } = DepartmentStore();
  let navigate = useNavigate();
  let { nameRef } = useRef();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSingleDepartmentRequest(id);
    })();
  }, [getSingleDepartmentRequest, id]);

  console.log(singleDepartment);

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Update department
          </h1>

          <form>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Name' className='text-gray-600'>
                  Name:
                </label>
                <input
                  ref={(input) => (nameRef = input)}
                  defaultValue={singleDepartment?.name}
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
              Update Department
            </button>
          </form>
        </div>
      </>
    </section>
  );
};

export default UpdateDepartment;
