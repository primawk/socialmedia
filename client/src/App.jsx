import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* have to import the element , synchronus system first come first served */}
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Profile />} exact path="/profile/:username" />
        <Route element={<Home />} exact path="/" />
        {/* "/" is in the last line due synchronus system */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
