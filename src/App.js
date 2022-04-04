import logo from "./logo.svg";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Review from "./components/Review/Review";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
