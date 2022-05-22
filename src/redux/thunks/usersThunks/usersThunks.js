import axios from "axios";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_LOGIN;

  const { data } = await axios.post(url, userData);
  localStorage.setItem("token", data);
};

export default loginThunk;
