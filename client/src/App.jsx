import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {/* have to import the element , synchronus system first come first served */}
        {/* is user logged in? */}
        <Route element={user ? <Navigate to="/" /> : <Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Profile />} path="/profile/:username" />
        <Route element={user ? <Home /> : <Register />} exact path="/" />
        {/* "/" is in the last line due synchronus system */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
