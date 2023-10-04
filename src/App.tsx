import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/login/login";
import Signup from "./components/authentication/signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
