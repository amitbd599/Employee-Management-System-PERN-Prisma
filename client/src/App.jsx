import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import GetUserPage from "./pages/GetUserPage";
import CreateDepartmentPage from "./pages/CreateDepartmentPage";
import UpdateDepartmentPage from "./pages/UpdateDepartmentPage";
import GetDepartmentPage from "./pages/GetDepartmentPage";
import CreateRolePage from "./pages/CreateRolePage";
import GetRolePage from "./pages/GetRolePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/create-user' element={<CreateUserPage />} />
        <Route exact path='/update-user' element={<UpdateUserPage />} />
        <Route exact path='/get-all-user' element={<GetUserPage />} />
        <Route
          exact
          path='/create-department'
          element={<CreateDepartmentPage />}
        />
        <Route
          exact
          path='/update-department/:id'
          element={<UpdateDepartmentPage />}
        />
        <Route
          exact
          path='/get-all-department'
          element={<GetDepartmentPage />}
        />
        <Route exact path='/create-role' element={<CreateRolePage />} />
        <Route exact path='/get-all-role' element={<GetRolePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
