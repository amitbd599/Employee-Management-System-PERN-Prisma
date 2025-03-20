import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import GetUserPage from "./pages/GetUserPage";
import CreateDepartmentPage from "./pages/CreateDepartmentPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
