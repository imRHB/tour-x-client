import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import AuthProvider from "./contexts/AuthProvider";
import BlogDetails from "./Pages/Details/BlogDetails/BlogDetails";
import PaginatedItems from "./Pages/Error/Extra/PaginatedItems";
import PaginationWithJ from "./Pages/Error/Extra/PaginationWithJ";
import TestingPage from "./Pages/Error/Extra/TestingPage";
import NotFound from "./Pages/Error/NotFound/NotFound";
import Blogs from "./Pages/Landing/Blogs/Blogs/Blogs";
import Landing from "./Pages/Landing/Landing";
import PrivateRoute from "./Pages/Routes/PrivateRoute/PrivateRoute";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AddBlog from "./Pages/Users/Dashboard/AddBlog/AddBlog";
import Dashboard from "./Pages/Users/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Users/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/Users/Dashboard/ManageBlogs/ManageBlogs";
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

            <Route path="/blogs/:blogId" element={<PrivateRoute>
              <BlogDetails />
            </PrivateRoute>} />

            {/* Dashboard */}

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="add-blog" element={<AddBlog />} />
              <Route path="manage-blogs" element={<ManageBlogs />} />
              <Route path="make-admin" element={<MakeAdmin />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="test" element={<TestingPage />} />
            <Route path="test2" element={<PaginationWithJ />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
