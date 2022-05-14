import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/HomePage/About";
import Home from "./Pages/HomePage/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/User/Login";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import SignUp from "./Pages/User/SignUp";

function App() {
  return (
    <div className="app max-w-7xl px-28">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
