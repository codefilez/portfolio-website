import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import BlogPostPage from "./routes/blog/BlogPostPage";
import Books from "./routes/books/Books";

const rootElement = document.getElementById(`root`);
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="books" element={<Books />} />
      <Route path="blogs" element={<BlogPostPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
