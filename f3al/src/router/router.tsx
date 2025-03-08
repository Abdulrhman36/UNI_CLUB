import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/SignUp/SignUp.tsx";

import Login from "../components/LogIn/LoginPage.tsx";
import { Children } from "react";
import Home from "../components/Home/Home.tsx";
type PropType = {
  Children: React.ReactNode;
};

const AppRouter = (props?: PropType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
