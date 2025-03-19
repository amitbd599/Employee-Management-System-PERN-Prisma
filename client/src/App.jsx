import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/create-user' element={<CreateUserPage />} />
        <Route exact path='/update-user' element={<UpdateUserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
