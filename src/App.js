import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import AuthProvider from "./contexts/AuthProvider";
import BlogDetails from "./Pages/Details/BlogDetails/BlogDetails";
import Blogs from "./Pages/Landing/Blogs/Blogs/Blogs";
import Landing from "./Pages/Landing/Landing";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Users/Login/Login";
import Register from "./Pages/Users/Register/Register";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
