import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import Footer from "./Footer";
import api from "./api/Posts";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./Context/DataConstext";

const PostLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />

            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
