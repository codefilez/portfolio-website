import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import BlogPage from "./routes/blog/BlogPage";
import BooksPage from "./routes/books/BooksPage";
import styled from "@emotion/styled";

const StyledApp = styled.div({
  background: `#282c34`,
  textAlign: `center`,
});

const rootElement = document.getElementById(`root`);
render(
  <StyledApp>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </StyledApp>,
  rootElement
);
