import { useNavigate } from "react-router-dom";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { getUserData } from "./services/Apis";
import { setUser } from "./store/slice/User";
import { useDispatch } from "react-redux";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
   
      navigate("/login");
    } else {
      const header = { Authorization: `Bearer ${token}` };
      getUserData(token, header)
        .then((res) => {
          dispatch(setUser(res));
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    }
  }, []);
  return <Routes />;
}
export default App;
