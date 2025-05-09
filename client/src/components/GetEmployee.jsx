import React, { useEffect } from "react";
import EmployeeStore from "../../store/EmployeeStore";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { DeleteAlert } from "../helper/helper";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
const GetEmployee = () => {
  let {
    getAllEmployeesRequest,
    allEmployees,
    totalEmployee,
    deleteEmployeeRequest,
  } = EmployeeStore();
  let navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    (async () => {
      await getAllEmployeesRequest(10, 1);
    })();
  }, [getAllEmployeesRequest]);

  //! handelPageClick
  const handelPageClick = async (event) => {
    let pageNo = event.selected;
    await getAllEmployeesRequest(10, pageNo + 1);
    navigate(`/get-all-employee/${pageNo + 1}`);
  };

  //! delete employee
  let deleteEmployee = async (id) => {
    let isConfirmed = await DeleteAlert();

    if (isConfirmed) {
      let result = await deleteEmployeeRequest(id);
      if (result) {
        await getAllEmployeesRequest(10, params.pageNo);
      }
    }
  };

  return (
    <div>
      <section className='bg-white  shadow-md rounded-lg p-6'>
        {/* component */}
        <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
          Get all employee
        </h1>
        <div>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-200'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Personal Information
                </th>

                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Salary
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Department
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Role
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  View Employee
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  View Report
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Activity
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
              {allEmployees === null ? (
                <tr>
                  {[...Array(5)].map((item, index) => (
                    <td key={index}>
                      <Skeleton count={20} width={"100%"} />
                    </td>
                  ))}
                </tr>
              ) : (
                <>
                  {allEmployees?.map((item, index) => (
                    <tr key={index} className='hover:bg-gray-50'>
                      <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                        <div className='relative h-10 w-10'>
                          <img
                            className='h-full w-full rounded-full object-cover object-center'
                            src={`/api/get-file/${item?.img}`}
                            alt=''
                          />
                          <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                        </div>
                        <div className='text-sm'>
                          <div className='font-medium text-gray-700'>
                            {item?.firstName} {item?.lastName}
                          </div>
                          <div className='text-gray-400'>{item?.email}</div>
                        </div>
                      </th>

                      <td className='px-6 py-4'>
                        <strong className='text-[18px] text-gray-800'>
                          {item?.salary}
                        </strong>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600'>
                          {item?.department?.name}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600'>
                          {item?.role?.name}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600'>
                          Running
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600'>
                          Running
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600'>
                          Running
                        </span>
                      </td>

                      <td className='px-6 py-4'>
                        <div className='flex justify-end gap-4'>
                          <button
                            className='p-1'
                            onClick={() => deleteEmployee(item?.id)}
                          >
                            <FaTrashCan className='text-[16px]' />
                          </button>
                          <Link
                            className='p-1'
                            to={`/update-employee/${item?.id}`}
                          >
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
          <div className='flex align-items-center justify-center flex-wrap gap-2 mt-[20px]'>
            {totalEmployee > 10 ? (
              <div>
                <ReactPaginate
                  className='pagination flex  gap-3 mt-3'
                  previousLabel='<'
                  nextLabel='>'
                  pageClassName='page-item'
                  pageLinkClassName=' page-item'
                  previousLinkClassName='page-item'
                  nextLinkClassName='page-item'
                  activeClassName='active'
                  activeLinkClassName=' active-link'
                  breakLabel='...'
                  pageCount={totalEmployee / 10}
                  initialPage={params.pageNo - 1}
                  pageRangeDisplayed={3}
                  onPageChange={handelPageClick}
                  type='button'
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetEmployee;
