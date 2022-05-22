import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/HomePage/About";
import Home from "./Pages/HomePage/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/User/Login";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import SignUp from "./Pages/User/SignUp";
import RequireAuth from "./Shared/RequireAuth";
import SideBar from "./Pages/DashBoard/SideBar";
import MyAppointments from "./Pages/DashBoard/MyAppointments";
import MyReview from "./Pages/DashBoard/MyReview";
import AllUsers from "./Pages/DashBoard/AllUsers";
import RequireAdmin from "./Shared/RequireAdmin";
import AddDoctors from "./Pages/DashBoard/AddDoctors";
import ManageDoctors from "./Pages/DashBoard/ManageDoctors";

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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <SideBar></SideBar>
            </RequireAuth>
          }
        >
          {/* nested route */}
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="myreview" element={<MyReview></MyReview>}></Route>
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctors></AddDoctors>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
