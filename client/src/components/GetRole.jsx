import React, { useEffect } from "react";
import { DeleteAlert, formatDate } from "../helper/helper";
import RoleStore from "../../store/RoleStore";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const GetRole = () => {
  let { getAllRolesRequest, allRoles, deleteRoleRequest } = RoleStore();

  useEffect(() => {
    (async () => {
      await getAllRolesRequest();
    })();
  }, [getAllRolesRequest]);

  let deleteRole = async (id) => {
    let isConfirmed = await DeleteAlert();

    if (isConfirmed) {
      let result = await deleteRoleRequest(id);
      if (result) {
        await getAllRolesRequest();
      }
    }
  };
  return (
    <div>
      <section className='bg-white  shadow-md rounded-lg p-6'>
        {/* component */}
        <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
          Get all role
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
              {allRoles === null ? (
                <tr>
                  {[...Array(5)].map((item, index) => (
                    <td key={index}>
                      <Skeleton count={20} width={"100%"} />
                    </td>
                  ))}
                </tr>
              ) : (
                <>
                  {allRoles?.map((item, index) => (
                    <tr className='hover:bg-gray-50' key={index}>
                      <td className='px-6 py-4'>{item?.name}</td>
                      <td className='px-6 py-4'>
                        {formatDate(item?.createdAt)}
                      </td>

                      <td className='px-6 py-4'>
                        <div className='flex justify-end gap-4'>
                          <button
                            className='p-1'
                            onClick={() => deleteRole(item?.id)}
                          >
                            <FaTrashCan className='text-[16px]' />
                          </button>
                          <Link className='p-1' to={`/update-role/${item?.id}`}>
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

export default GetRole;
