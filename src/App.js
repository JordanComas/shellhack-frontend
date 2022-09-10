import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/login" element={<Login />} />
        <Route to="/signup" element={<Signup />} />
        <Route to="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
