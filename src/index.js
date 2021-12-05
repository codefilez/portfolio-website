import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import BlogPosts from "./routes/BlogPosts";
import Books from "./routes/Books";

const rootElement = document.getElementById(`root`);
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="books" element={<Books />} />
      <Route path="blogs" element={<BlogPosts />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
