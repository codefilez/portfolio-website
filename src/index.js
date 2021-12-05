import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./routes/welcome/WelcomePage";
import BlogPage from "./routes/blog/BlogPage";
import BooksPage from "./routes/books/BooksPage";
import styled from "@emotion/styled";

const StyledApp = styled.div({
  background: `#282c34`,
  minHeight: `100vh`,
  display: `flex`,
  flexDirection: `column`,
  backgroundImage: `url("https://images.run3wide.com/v2/lake-evening.jpg")`,
  backgroundSize: `100vw 100vh`,
  backgroundRepeat: `no-repeat`,
  backgroundAttachment: `fixed`,
});

const rootElement = document.getElementById(`root`);
render(
  <StyledApp>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </StyledApp>,
  rootElement
);
