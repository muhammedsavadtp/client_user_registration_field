import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import EditProfilePage from "../pages/EditProfile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserData } from "../services/Apis";

const RoutesPage = () => {
  // const user = useSelector((state) => state.User.userDetails);
  // console.log(user);
//   const id = localStorage.getItem("token");

// console.log(id);

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
