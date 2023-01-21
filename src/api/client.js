import { create } from "apisauce";

const client = create({
  baseURL: "https://qualido-server-16td.onrender.com/api",
});

// client.addAsyncRequestTransform(async (request) => {
//   const tokenString = localStorage.getItem("token");

//   if (tokenString === "undefined") return;

//   const token = JSON.parse(tokenString);

//   if (!token) return;

//   request.headers["Authorization"] = `Bearer ${token}`;
// });

export default client;
