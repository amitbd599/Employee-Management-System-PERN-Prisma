import React, { useEffect, useState } from "react";
import DepartmentStore from "../../store/DepartmentStore";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorToast, IsEmpty } from "../helper/helper";
import SubmitButton from "./SubmitButton";

const UpdateDepartment = () => {
  let [name, setName] = useState("");
  let {
    updateDepartmentRequest,
    getSingleDepartmentRequest,
    singleDepartment,
    loadingRequest,
  } = DepartmentStore();
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      await getSingleDepartmentRequest(id);
      setName(singleDepartment?.name);
    })();
  }, [getSingleDepartmentRequest, id, singleDepartment?.name]);

  let submitUpdateDepartment = async () => {
    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else {
      let res = await updateDepartmentRequest(id, { name });
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
            Update department
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
              text='Update department'
              type='submit'
              submitFun={submitUpdateDepartment}
              isSubmitting={loadingRequest}
            />
          </form>
        </div>
      </>
    </section>
  );
};

export default UpdateDepartment;
