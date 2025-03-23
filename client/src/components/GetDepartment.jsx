import React, { useEffect } from "react";
import DepartmentStore from "../../store/DepartmentStore";
import { DeleteAlert, formatDate } from "../helper/helper";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const GetDepartment = () => {
  let { getAllDepartmentsRequest, allDepartments, deleteDepartmentRequest } =
    DepartmentStore();

  useEffect(() => {
    (async () => {
      await getAllDepartmentsRequest();
    })();
  }, [getAllDepartmentsRequest]);

  let deleteDepartment = async (id) => {
    let isConfirmed = await DeleteAlert();

    if (isConfirmed) {
      let result = await deleteDepartmentRequest(id);
      if (result) {
        await getAllDepartmentsRequest();
      }
    }
  };

  return (
    <div>
      <section className='bg-white  shadow-md rounded-lg p-6'>
        {/* component */}
        <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
          Get all departments
        </h1>
        <div>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-200'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>

                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Create date
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-end text-gray-900'
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-300'>
              {allDepartments === null ? (
                <tr>
                  {[...Array(5)].map((item, index) => (
                    <td key={index}>
                      <Skeleton count={20} width={"100%"} />
                    </td>
                  ))}
                </tr>
              ) : (
                <>
                  {allDepartments?.map((item, index) => (
                    <tr className='hover:bg-gray-50' key={index}>
                      <td className='px-6 py-4'>{item?.name}</td>
                      <td className='px-6 py-4'>
                        {formatDate(item?.createdAt)}
                      </td>

                      <td className='px-6 py-4'>
                        <div className='flex justify-end gap-4'>
                          <button
                            className='p-1'
                            onClick={() => deleteDepartment(item?.id)}
                          >
                            <FaTrashCan className='text-[16px]' />
                          </button>
                          <Link className='p-1' to={`/update-user/${item?.id}`}>
                            <FaRegPenToSquare className='text-[16px]' />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GetDepartment;
