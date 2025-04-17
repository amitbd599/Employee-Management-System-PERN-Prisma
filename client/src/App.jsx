import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
import ProfilePage from "./pages/ProfilePage";
import UpdateEmployeePage from "./pages/UpdateEmployeePage";
import CreateSalaryPage from "./pages/CreateSalaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        {/* department */}
        <Route
          exact
          path='/create-department'
          element={
            <PrivateRoute>
              <CreateDepartmentPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/update-department/:id'
          element={
            <PrivateRoute>
              <UpdateDepartmentPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/get-all-department'
          element={
            <PrivateRoute>
              <GetDepartmentPage />
            </PrivateRoute>
          }
        />
        {/* role */}
        <Route
          exact
          path='/create-role'
          element={
            <PrivateRoute>
              <CreateRolePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/get-all-role'
          element={
            <PrivateRoute>
              <GetRolePage />
            </PrivateRoute>
          }
        />
        <Route exact path='/update-role/:id' element={<UpdateRolePage />} />

        {/* employee */}
        <Route exact path='/create-employee' element={<CreateEmployeePage />} />
        <Route
          exact
          path='/get-all-employee/:pageNo'
          element={<GetEmployeePage />}
        />
        <Route
          exact
          path='/update-employee/:id'
          element={<UpdateEmployeePage />}
        />

        {/* salary */}
        <Route exact path='/create-salary' element={<CreateSalaryPage />} />

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
