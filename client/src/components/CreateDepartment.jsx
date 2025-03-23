import React, { useState } from "react";
import DepartmentStore from "../../store/DepartmentStore";
import { ErrorToast, IsEmpty } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";

const CreateDepartment = () => {
  let { createDepartmentRequest, loadingRequest } = DepartmentStore();
  let navigate = useNavigate();

  let [name, setName] = useState("");

  let submitCreateDepartment = async () => {
    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else {
      let res = await createDepartmentRequest({ name });
      if (res) {
        navigate("/get-all-department");
      }
    }
  };

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new department
          </h1>

          <div>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Name' className='text-gray-600'>
                  Name:
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id='Name'
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>

            <SubmitButton
              text='Create new department'
              type='submit'
              submitFun={submitCreateDepartment}
              isSubmitting={loadingRequest}
            />
          </div>
        </div>
      </>
    </section>
  );
};

export default CreateDepartment;
