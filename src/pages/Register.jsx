import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/Apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const [imageName, setImageName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: null,
    option: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    image: "",
    option: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));

    if (file) {
      setImageName(file.name);
    } else {
      setImageName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      image: "",
      option: "",
    });

    // Validate first name
    if (!formData.firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name is required.",
      }));
    }

    // Validate last name
    if (!formData.lastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name is required.",
      }));
    }

    // Validate email
    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(formData.email)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address.",
        }));
      }
    }

    // Validate password
    if (!formData.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
    } else {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
        }));
      }
    }

    // If there are no errors, proceed with form submission
    if (Object.values(errors).every((error) => error === "")) {
      try {
        const { firstName, lastName, email, password, image, option } =
          formData;

        // Prepare the data to be sent to the server
        const data = {
          firstName,
          lastName,
          email,
          password,
          image,
          option,
        };

        // Make the API call to register the user
        const response = await registerUser(data, {});

        // Handle the response accordingly
        console.log(response);

        // Show success toast message
        toast.success("User registered successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.error(error);

        // Show error toast message
        toast.error("Failed to register user", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      // Show error toast message
      toast.error("Please fill in all required fields", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-center" />

      <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="md:w-1/2">
          <img
            className="object-fill w-full h-full"
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1684136425~exp=1684137025~hmac=05428f0e56fb7b2e4bb04289e1d19bd00add14230443e257e8e4f27c9d0a05db"
            alt="image"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
          {/* Right side registration form */}
          <form className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4">
            <div className="mb-4">
              <div className="flex">
                <div className="w-1/2 mr-2">
                  <input
                    type="                text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md py-2 px-3 ${
                      errors.firstName ? "text-red-500" : "text-gray-700"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-1/2 ml-2">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md py-2 px-3 ${
                      errors.lastName ? "text-red-500" : "text-gray-700"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md py-2 px-3 ${
                  errors.email ? "text-red-500" : "text-gray-700"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md py-2 px-3 ${
                  errors.password ? "text-red-500" : "text-gray-700"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-4 flex">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="image"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-3 cursor-pointer flex items-center"
              >
                Upload profile
                {imageName && (
                  <span className="ml-2 text-gray-700">{imageName}</span>
                )}
              </label>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-3"
              >
                Register
              </button>

              <p className="my-5">
                {" "}
                already an account{" "}
                <Link to={"/login"}>
                  <span className="text-blue-800 underline">sign in </span>
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
