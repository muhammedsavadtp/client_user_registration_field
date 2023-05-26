import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/helper";
import { updateProfile } from "../services/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfilePage = () => {
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.User.userDetails);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    image: "",
    previewImage: "",
  });

  const {
    firstName,
    lastName,
    email,
    oldPassword,
    newPassword,
    confirmPassword,
    image,
    previewImage,
  } = userData;

  useEffect(() => {
    if (user) {
      setUserData((prevState) => ({
        ...prevState,
        firstName: user.firstName,
        lastName: user.lastName,
        previewImage: `${BASE_URL}/${user.profileImage}`,
        email: user.email,

      }));
      setUpdate(false)
    }

    
  }, [ update,user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const previewImage = reader.result;
      setUserData((prevState) => ({
        ...prevState,
        image: file,
        previewImage: previewImage,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("firstName", userData.firstName);
    formData.append("lastName", userData.lastName);
    formData.append("email", userData.email);
    formData.append("oldPassword", userData.oldPassword);
    formData.append("newPassword", userData.newPassword);
    formData.append("confirmPassword", userData.confirmPassword);

    const header = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    updateProfile(user._id, formData, header)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("update user details successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          setUpdate(true);
          // window.location.reload();
        } else {
          toast.error(res.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("User Data:", userData);
  };

  return (
    <div className="flex justify-center items-center w-full ">
      <ToastContainer position="top-center" />
      <div className="w-full  bg-white rounded-lg shadow-lg p-6 ">
        <h2 className="text-2xl mb-4">Edit Profile</h2>
        <div className=" flex flex-col justify-center items-center">
          <div className="w-32 h-32 overflow-hidden ">
            {previewImage ? (
              <img
                src={previewImage}
                alt="User"
                className="h-full w-full object-cover  rounded-full overflow-hidden mb-4"
              />
            ) : (
              <img
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1684137431~exp=1684138031~hmac=900df7c3afcd56237fadd53d3c704300f1e0751334caa17a0e5e20ca39690b8b"
                alt="User"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <label
            htmlFor="imageUpload"
            className="cursor-pointer text-blue-500 hover:text-blue-600"
          >
            Change Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div className="flex flex-col md:flex-row  justify-center">
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm text-gray-400"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm text-gray-400"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="block mb-2 text-sm text-gray-400"
              >
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                value={oldPassword}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm text-gray-400"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm text-gray-400"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Save Changes
              </button>
              <button
                type="submit"
                onClick={() => navigate("/")}
                className="bg-red-500 mt-5 hover:bg-red-600 text-white py-2 px-4 rounded-md"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
