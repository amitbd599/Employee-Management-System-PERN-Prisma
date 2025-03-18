import React from "react";
import { FaCartPlus, FaRegCircleUser } from "react-icons/fa6";
import ReactApexChart from "react-apexcharts";
const Dashboard = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  return (
    <div>
      <div className='grid grid-cols-12 gap-[30px]'>
        <div className='col-span-6'>
          <div className='grid grid-cols-12 gap-[20px]'>
            <div className='col-span-6'>
              <div className='flex justify-between items-center bg-white shadow-lg p-[30px] rounded-lg h-[140px]'>
                <div className='flex justify-center items-center '>
                  <FaRegCircleUser className='text-purple-600 px-[20px] py-[20px] bg-purple-50 rounded-lg text-[70px]' />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-text'>
                    Total User
                  </p>
                  <p className='text-heading text-[26px] font-bold'>12</p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-between items-center bg-white shadow-lg p-[30px] rounded-lg h-[140px]'>
                <div className='flex justify-center items-center '>
                  <FaRegCircleUser className='text-purple-600 px-[20px] py-[20px] bg-purple-50 rounded-lg text-[70px]' />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-text'>
                    Total User
                  </p>
                  <p className='text-heading text-[26px] font-bold'>12</p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-between items-center bg-white shadow-lg p-[30px] rounded-lg h-[140px]'>
                <div className='flex justify-center items-center '>
                  <FaRegCircleUser className='text-purple-600 px-[20px] py-[20px] bg-purple-50 rounded-lg text-[70px]' />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-text'>
                    Total User
                  </p>
                  <p className='text-heading text-[26px] font-bold'>12</p>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='flex justify-between items-center bg-white shadow-lg p-[30px] rounded-lg h-[140px]'>
                <div className='flex justify-center items-center '>
                  <FaRegCircleUser className='text-purple-600 px-[20px] py-[20px] bg-purple-50 rounded-lg text-[70px]' />
                </div>
                <div>
                  <p className='text-[14px] font-medium text-text'>
                    Total User
                  </p>
                  <p className='text-heading text-[26px] font-bold'>12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-6'>
          <div className=' bg-white shadow-lg px-[10px] py-[10px] rounded-lg'>
            <div id='chart'>
              <ReactApexChart
                options={state.options}
                series={state.series}
                type='bar'
                height={262}
              />
            </div>
          </div>
        </div>

        <div className='col-span-12'>
          <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md '>
            <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    State
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    Role
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    Team
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  />
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                <tr className='hover:bg-gray-50'>
                  <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div className='relative h-10 w-10'>
                      <img
                        className='h-full w-full rounded-full object-cover object-center'
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                      <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                    </div>
                    <div className='text-sm'>
                      <div className='font-medium text-gray-700'>
                        Steven Jobs
                      </div>
                      <div className='text-gray-400'>jobs@sailboatui.com</div>
                    </div>
                  </th>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                      Active
                    </span>
                  </td>
                  <td className='px-6 py-4'>Product Designer</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-2'>
                      <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                        Design
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        Product
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600'>
                        Develop
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='hover:bg-gray-50'>
                  <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div className='relative h-10 w-10'>
                      <img
                        className='h-full w-full rounded-full object-cover object-center'
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                      <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                    </div>
                    <div className='text-sm'>
                      <div className='font-medium text-gray-700'>
                        Steven Jobs
                      </div>
                      <div className='text-gray-400'>jobs@sailboatui.com</div>
                    </div>
                  </th>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                      Active
                    </span>
                  </td>
                  <td className='px-6 py-4'>Product Designer</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-2'>
                      <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                        Design
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        Product
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600'>
                        Develop
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='hover:bg-gray-50'>
                  <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div className='relative h-10 w-10'>
                      <img
                        className='h-full w-full rounded-full object-cover object-center'
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                      <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                    </div>
                    <div className='text-sm'>
                      <div className='font-medium text-gray-700'>
                        Steven Jobs
                      </div>
                      <div className='text-gray-400'>jobs@sailboatui.com</div>
                    </div>
                  </th>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                      Active
                    </span>
                  </td>
                  <td className='px-6 py-4'>Product Designer</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-2'>
                      <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                        Design
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        Product
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600'>
                        Develop
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='hover:bg-gray-50'>
                  <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div className='relative h-10 w-10'>
                      <img
                        className='h-full w-full rounded-full object-cover object-center'
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                      <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                    </div>
                    <div className='text-sm'>
                      <div className='font-medium text-gray-700'>
                        Steven Jobs
                      </div>
                      <div className='text-gray-400'>jobs@sailboatui.com</div>
                    </div>
                  </th>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                      Active
                    </span>
                  </td>
                  <td className='px-6 py-4'>Product Designer</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-2'>
                      <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                        Design
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        Product
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600'>
                        Develop
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='hover:bg-gray-50'>
                  <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
                    <div className='relative h-10 w-10'>
                      <img
                        className='h-full w-full rounded-full object-cover object-center'
                        src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                      <span className='absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white' />
                    </div>
                    <div className='text-sm'>
                      <div className='font-medium text-gray-700'>
                        Steven Jobs
                      </div>
                      <div className='text-gray-400'>jobs@sailboatui.com</div>
                    </div>
                  </th>
                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600'>
                      <span className='h-1.5 w-1.5 rounded-full bg-green-600' />
                      Active
                    </span>
                  </td>
                  <td className='px-6 py-4'>Product Designer</td>
                  <td className='px-6 py-4'>
                    <div className='flex gap-2'>
                      <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                        Design
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
                        Product
                      </span>
                      <span className='inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600'>
                        Develop
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-end gap-4'>
                      <a x-data="{ tooltip: 'Delete' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-6 w-6'
                          x-tooltip='tooltip'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
