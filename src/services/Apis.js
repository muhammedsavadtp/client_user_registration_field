import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helper";


export const registerUser = async (data, header) => {
  try {
    const response = await commonrequest(
      "POST",
      `${BASE_URL}/user/register`,
      data,
      header
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to register user");
  }
};

export const loginUser = async (data, header) => {
  try {
    const response = await commonrequest(
      "POST",
      `${BASE_URL}/user/login`,
      data,
      header
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to login user");
  }
};

export const updateProfile = async (userId, data, header) => {
  try {
    const response = await commonrequest(
      "PUT",
      `${BASE_URL}/user/${userId}`,
      data,
      header
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user profile");
  }
};

export const getUserData = async (userId, header) => {
  try {
    const response = await commonrequest(
      "GET",
      `${BASE_URL}/user/${userId}`,
      null,
      header
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to get user data");
  }
};

