import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoleStore from "../../store/RoleStore";
import { ErrorToast, IsEmpty } from "../helper/helper";
import SubmitButton from "./SubmitButton";

const UpdateRole = () => {
  let [name, setName] = useState("");
  let { updateRoleRequest, getSingleRoleRequest, singleRole, loadingRequest } =
    RoleStore();
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSingleRoleRequest(id);
      setName(singleRole?.name);
    })();
  }, [getSingleRoleRequest, id, singleRole?.name]);

  let submitUpdateRole = async () => {
    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else {
      let res = await updateRoleRequest(id, { name });
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
            Update role
          </h1>

          <form>
            <div className='flex gap-[20px] mb-4'>
              <div className='w-full grid gap-1'>
                <label htmlFor='Name' className='text-gray-600'>
                  Name:
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                />
              </div>
            </div>

            <SubmitButton
              text='Update role'
              type='submit'
              submitFun={submitUpdateRole}
              isSubmitting={loadingRequest}
            />
          </form>
        </div>
      </>
    </section>
  );
};

export default UpdateRole;
