import client from "./client";

const sendOtp = (phoneNumber) => client.post("/auth/sendOTP", { phoneNumber });

const verifyOtp = (data) => client.post("/auth/verifyOTP", data);

const signup = (data) => client.post("/auth/register", data);

const login = (data) => client.post("/auth/login", data);

const getUser = () => client.get("/auth/user");

export default {
  sendOtp,
  verifyOtp,
  signup,
  login,
  getUser,
};
