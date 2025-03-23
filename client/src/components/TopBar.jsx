import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FaArrowRightFromBracket, FaRegCircleUser } from "react-icons/fa6";
import UserStore from "../../store/UserStore";
import { Link, useNavigate } from "react-router-dom";

const TopBar = () => {
  let navigate = useNavigate();
  let { logoutRequest } = UserStore();
  const handleLogout = async () => {
    let result = await logoutRequest();
    if (result) {
      navigate("/login");
    }
  };
  return (
    <div className='h-[60px] shadow-md w-full flex justify-end items-center pr-[40px] '>
      <Menu>
        <MenuHandler>
          <Avatar
            variant='circular'
            alt='tania andrew'
            className='cursor-pointer'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
        </MenuHandler>
        <MenuList>
          <MenuItem className='flex items-center gap-2'>
            <FaRegCircleUser />

            <Typography variant='small' className='font-medium'>
              <Link to='/profile'>My Profile</Link>
            </Typography>
          </MenuItem>
          <hr className='my-2 border-blue-gray-50' />
          <MenuItem className='flex items-center gap-2 '>
            <FaArrowRightFromBracket />
            <Typography
              onClick={handleLogout}
              variant='small'
              className='font-medium'
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default TopBar;
