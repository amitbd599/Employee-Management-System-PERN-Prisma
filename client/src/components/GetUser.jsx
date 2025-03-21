import React, { useEffect } from "react";
import UserStore from "../../store/UserStore";
import Skeleton from "react-loading-skeleton";
import { DeleteAlert, formatDate } from "../helper/helper";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
const GetUser = () => {
  let { getAllUsersRequest, allUser, deleteUserRequest } = UserStore();

  useEffect(() => {
    (async () => {
      await getAllUsersRequest();
    })();
  }, [getAllUsersRequest]);

  let deleteUser = async (id) => {
    let isConfirmed = await DeleteAlert();

    if (isConfirmed) {
      let result = await deleteUserRequest(id);
      if (result) {
        await getAllUsersRequest();
      }
    }
  };

  return (
    <div>
      <section className='bg-white  shadow-md rounded-lg p-6'>
        {/* component */}
        <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
          Create a new user
        </h1>
        <div>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-200'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Role
                </th>

                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Join Date
                </th>
                <th
                  scope='col'
                  className='px-6 py-4 font-medium text-gray-900'
                />
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100 border-t border-gray-300'>
              {allUser === null ? (
                <tr>
                  {[...Array(5)].map((item, index) => (
                    <td key={index}>
                      <Skeleton count={20} width={"100%"} />
                    </td>
                  ))}
                </tr>
              ) : (
                <>
                  {allUser.map((item, index) => (
                    <tr className='hover:bg-gray-50' key={index}>
                      <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                        <div className='relative h-10 w-10'>
                          <img
                            className='h-full w-full rounded-full object-cover object-center'
                            src={`api/get-file/${item?.img}`}
                            alt=''
                          />
                          <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                        </div>
                        <div className='text-sm'>
                          <div className='font-medium text-gray-700'>
                            {item?.name}
                          </div>
                          <div className='text-gray-400'>{item?.email}</div>
                        </div>
                      </th>
                      <td className='px-6 py-4'>
                        <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                          <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                          {item?.role}
                        </span>
                      </td>
                      <td className='px-6 py-4'>
                        {formatDate(item?.createdAt)}
                      </td>

                      <td className='px-6 py-4'>
                        <div className='flex justify-end gap-4'>
                          <button
                            className='p-1'
                            onClick={() => deleteUser(item?.id)}
                          >
                            <FaTrashCan className='text-[16px]' />
                          </button>
                          <button className='p-1'>
                            <FaRegPenToSquare className='text-[16px]' />
                          </button>
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

export default GetUser;
