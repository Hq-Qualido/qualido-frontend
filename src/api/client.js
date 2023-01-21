import { create } from "apisauce";

// const __DEV__ = process.env.NODE_ENV === "development";

const client = create({
  // baseURL: "https://pc-web-server.onrender.com/api",
  baseURL: "https://qualido-server-16td.onrender.com/api",
});

client.addAsyncRequestTransform(async (request) => {
  const tokenString = localStorage.getItem("token");

  if (tokenString === "undefined") return;

  const token = JSON.parse(tokenString);

  if (!token) return;

  request.headers["Authorization"] = `Bearer ${token}`;
});

export default client;
