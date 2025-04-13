import { Link, NavLink, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
export function Sidebar() {
  let location = useLocation();

  console.log(location.pathname);

  return (
    <section className='w-[260px] border-r border-gray-300  h-screen fixed z-[0] bg-white overflow-auto scrollbar-hidden'>
      <div className=''>
        <div className='px-[10px] py-[20px] flex justify-center border-b'>
          <Link to='/'>
            <img src='/assets/img/logo.png' className='w-[160px]' alt='' />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='#' className='nav'>
                Home <FaAngleDown />
              </Link>
              <ul className='pl-[20px] py-2 grid gap-2'>
                <li>
                  <NavLink
                    to='/'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/profile'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <Link to='#' className='nav'>
                Department <FaAngleDown />
              </Link>
              <ul className='pl-[20px] py-2 grid gap-2'>
                <li>
                  <NavLink
                    to='/create-department'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Create Department
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/get-all-department'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Get All Department
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link to='#' className='nav'>
                Role <FaAngleDown />
              </Link>
              <ul className='pl-[20px] py-2 grid gap-2'>
                <li>
                  <NavLink
                    to='/create-role'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Create Role
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/get-all-role'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Get All Role
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link to='#' className='nav'>
                Employee <FaAngleDown />
              </Link>
              <ul className='pl-[20px] py-2 grid gap-2'>
                <li>
                  <NavLink
                    to='/create-employee'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    Create Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/get-all-employee/1'
                    className={
                      location.pathname.split("/").slice(0, 2).join("/") ===
                      "/get-all-employee"
                        ? "nav__item_active"
                        : "nav__item"
                    }
                  >
                    Get All Employee
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link to='#' className='nav'>
                Media <FaAngleDown />
              </Link>
              <ul className='pl-[20px] py-2 grid gap-2'>
                <li>
                  <NavLink
                    to='/get-all-gallery/1'
                    className={(navData) =>
                      navData.isActive ? "nav__item_active" : "nav__item"
                    }
                  >
                    All Media
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
