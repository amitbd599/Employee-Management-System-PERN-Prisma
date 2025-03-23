import React, { useState } from "react";
import RoleStore from "../../store/RoleStore";
import { useNavigate } from "react-router-dom";
import { ErrorToast, IsEmpty } from "../helper/helper";
import SubmitButton from "./SubmitButton";

const CreateRole = () => {
  let { createRoleRequest, loadingRequest } = RoleStore();
  let navigate = useNavigate();

  let [name, setName] = useState("");

  let submitCreateDepartment = async () => {
    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else {
      let res = await createRoleRequest({ name });
      if (res) {
        navigate("/get-all-role");
      }
    }
  };

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new role
          </h1>

          <form>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Name' className='text-gray-600'>
                  Name:
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>

            <SubmitButton
              text='Create new role'
              type='submit'
              submitFun={submitCreateDepartment}
              isSubmitting={loadingRequest}
            />
          </form>
        </div>
      </>
    </section>
  );
};

export default CreateRole;
