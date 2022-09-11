import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Terms from "./components/Terms";
import NewTransaction from "./components/NewTransaction";
import Goals from "./components/Goals";
import AddButton from "./components/AddButton";
import AllTransactions from "./components/AllTransaction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/transaction" element={<NewTransaction />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/alltransactions" element={<AllTransactions />} />
      </Routes>
      <AddButton />
      <Footer />
    </div>
  );
}

export default App;
