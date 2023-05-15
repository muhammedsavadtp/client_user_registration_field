import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import EditProfilePage from "../pages/EditProfile";

const RoutesPage = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<SignIn />} />
        <Route path="editprofile" element={<EditProfilePage />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
