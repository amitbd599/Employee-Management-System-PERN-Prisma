import React from "react";
import { Sidebar } from "../components/Sidebar";
import TopBar from "../components/Topbar";

const MasterLayout = ({ children }) => {
  return (
    <section>
      <div className='flex'>
        {/* Sidebar */}
        <Sidebar />

        {/* Inner body */}
        <div className='w-full'>
          <TopBar />
          <div className='px-[40px] pt-[40px] min-h-[calc(100vh-60px)] bg-[#F0F1F7]'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterLayout;
