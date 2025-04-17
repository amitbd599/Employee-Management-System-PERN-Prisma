import EmployeeStore from "../../store/EmployeeStore";
import { useNavigate, useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import Modal from "react-modal";
import { DeleteAlert, ErrorToast, IsEmpty } from "../helper/helper";
import SubmitButton from "./SubmitButton";
import DepartmentStore from "../../store/DepartmentStore";
import RoleStore from "../../store/RoleStore";
import FileStore from "../../store/FileStore";
import { FaTrashCan } from "react-icons/fa6";

const CreateSalary = () => {
  let { createEmployeeRequest,getSingleEmployeeRequest,singleEmployee, loadingRequest } = EmployeeStore();
  let { getAllDepartmentsRequest, allDepartments } = DepartmentStore();


  let { getAllRolesRequest, allRoles } = RoleStore();
  let navigate = useNavigate();
  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    salary: "",
    departmentId: "",
    roleId: "",
  });



  useEffect(() => {
    (async () => {
      // await getSingleEmployeeRequest(id);
      await getAllDepartmentsRequest();
      await getAllRolesRequest();
    })();
  }, [getAllDepartmentsRequest, getAllRolesRequest, getSingleEmployeeRequest]);

  let submitCreateEmployee = async () => {
    let { firstName, lastName, email, phone, salary, departmentId, roleId } =
      data;

    if (IsEmpty(firstName)) {
      ErrorToast("First Name is required. ");
      return;
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name is required. ");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Email is required. ");
      return;
    } else if (IsEmpty(img)) {
      ErrorToast("Image is required. ");
      return;
    } else if (IsEmpty(phone)) {
      ErrorToast("Phone is required. ");
      return;
    } else if (IsEmpty(salary)) {
      ErrorToast("Salary is required. ");
      return;
    } else if (IsEmpty(departmentId)) {
      ErrorToast("Department is required. ");
      return;
    } else if (IsEmpty(roleId)) {
      ErrorToast("Role is required. ");
      return;
    } else {
      let res = await createEmployeeRequest({
        firstName,
        lastName,
        email,
        phone,
        salary: parseFloat(salary),
        departmentId,
        roleId,
      });
      if (res) {
        navigate("/get-all-employee/1");
      }
    }
  };

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new employee
          </h1>

          <div className='grid grid-cols-12 gap-[30px]'>
            <div className='col-span-4'></div>
            <div className='col-span-8'>
              <div className='flex gap-[20px] mb-4'>
                <div className='w-full grid gap-1'>
                  <div className='flex gap-3'>
                    <label htmlFor='firstName' className='text-gray-600'>
                      First Name:
                    </label>
                    <p>Alex </p>
                  </div>
                  <div className='flex gap-3'>
                    <label htmlFor='firstName' className='text-gray-600'>
                      First Name:
                    </label>
                    <p>Alex </p>
                  </div>
                </div>
                <div className='w-full grid gap-1'>
                  <div className='flex gap-3'>
                    <label htmlFor='firstName' className='text-gray-600'>
                      First Name:
                    </label>
                    <p>Alex </p>
                  </div>
                  <div className='flex gap-3'>
                    <label htmlFor='firstName' className='text-gray-600'>
                      First Name:
                    </label>
                    <p>Alex </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-[20px] mb-4'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='email' className='text-gray-600'>
                    Email:
                  </label>
                  <input
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
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
                    onChange={(e) =>
                      setData({ ...data, salary: e.target.value })
                    }
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
                    <select
                      className='border p-2 rounded w-full h-[40px] focus:outline-none cursor-pointer text-gray-600'
                      value={data?.departmentId}
                      onChange={(e) =>
                        setData({ ...data, departmentId: e.target.value })
                      }
                    >
                      <option value=''>Select department</option>
                      {allDepartments?.map((item, index) => (
                        <option value={item?.id} key={index}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className=' w-full'>
                  <div className='w-full grid gap-1'>
                    <label htmlFor='Role' className='text-gray-600'>
                      Role:
                    </label>
                    <select
                      className='border p-2 rounded w-full h-[40px] focus:outline-none cursor-pointer text-gray-600'
                      value={data?.roleId}
                      onChange={(e) =>
                        setData({ ...data, roleId: e.target.value })
                      }
                    >
                      <option value=''>Select role</option>
                      {allRoles?.map((item, index) => (
                        <option value={item?.id} key={index}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <SubmitButton
                text='Create new employee'
                type='submit'
                submitFun={submitCreateEmployee}
                isSubmitting={loadingRequest}
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default CreateSalary;
