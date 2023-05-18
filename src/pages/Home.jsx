import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_URL } from "../services/helper";
const HomePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.User.userDetails);
 
  console.log(user.profileImage);
  useEffect(() => {}, [user]);
  const logout = () => {
    const proceed = window.confirm("Are you sure you want to logout?");

    if (proceed) {
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      // No action required
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <img
              src={`${BASE_URL}/${user.profileImage}` || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1684137431~exp=1684138031~hmac=900df7c3afcd56237fadd53d3c704300f1e0751334caa17a0e5e20ca39690b8b"}
              alt="User"
              className="rounded-full h-16 w-16 object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold">
              {user && String(user.firstName + user.lastName)}
            </h2>
            <p className="text-gray-500">{user && user.email}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={"/editprofile"}>
            {" "}
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-3">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 ml-2 hover:bg-red-600 text-white rounded-md py-2 px-3"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
