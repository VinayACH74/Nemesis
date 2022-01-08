import "./App.css";
import "./components/Signin.css";
import "./components/Login/Login.css";
import "./components/Error/ErrorPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Signin from "./components/Signin";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/Error/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import CreateUser from "./components/CreateUser/CreateUser";
import UserDetails from "./components/UserDetails/UserDetails";
import Logout from "./components/Logout/Logout";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Homepage/>}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/adminTab" element={<Navbar />} />
        <Route path="/adminTab/createuser" element={<CreateUser />} />
        <Route path="/adminTab/userdetails" element={<UserDetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
