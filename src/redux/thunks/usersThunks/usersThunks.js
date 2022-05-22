import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../../features/usersSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_LOGIN;

  const { data } = await axios.post(url, userData);

  debugger;
  localStorage.setItem("token", data);

  const tokenDecoded = jwtDecode(data.token);
  dispatch(logInActionCreator(tokenDecoded));
};

export default loginThunk;
