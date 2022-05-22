import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import loginThunk from "./redux/thunks/usersThunks/usersThunks";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginThunk());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <h1>
        <img title="Pig Pole" src="logo.png" alt="Pig Pole logo" />
      </h1>
      <LoginForm />
    </div>
  );
}

export default App;
