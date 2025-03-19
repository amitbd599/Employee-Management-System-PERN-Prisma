import React from "react";
import MasterLayout from "../layout/Masterlayout";
import Dashboard from "../components/Dashboard";
import CreateUser from "../components/CreateUser";

const CreateUserPage = () => {
  return (
    <MasterLayout>
      {/* CreateUser */}
      <CreateUser />
    </MasterLayout>
  );
};

export default CreateUserPage;
