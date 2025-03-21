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
import UpdateRolePage from "./pages/UpdateRolePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import GetEmployeePage from "./pages/GetEmployeePage";
import GetGalleryFilePage from "./pages/GetGalleryFilePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route exact path='/login' element={<LoginPage />} />
        {/* user */}
        <Route exact path='/create-user' element={<CreateUserPage />} />
        <Route exact path='/update-user/:id' element={<UpdateUserPage />} />
        <Route exact path='/get-all-user' element={<GetUserPage />} />

        {/* department */}
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
        {/* role */}
        <Route exact path='/create-role' element={<CreateRolePage />} />
        <Route exact path='/get-all-role' element={<GetRolePage />} />
        <Route exact path='/update-role/:id' element={<UpdateRolePage />} />

        {/* employee */}
        <Route exact path='/create-employee' element={<CreateEmployeePage />} />
        <Route
          exact
          path='/get-all-employee/:id'
          element={<GetEmployeePage />}
        />

        {/* gallery */}
        <Route
          exact
          path='/get-all-gallery/:pageNo'
          element={<GetGalleryFilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
