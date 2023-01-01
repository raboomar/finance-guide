import axios from "axios";

const register = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  const res = await axios.post(
    "http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/auth",
    body,
    config
  );

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const login = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  const res = await axios.post(
    "http://127.0.0.1:5001/budgeapp-b963e/us-central1/app/auth/login",
    body,
    config
  );
  //   console.log(res);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
