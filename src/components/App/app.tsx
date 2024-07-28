import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../../routes/welcome/WelcomePage";
import { BooksPage } from "../../routes/books/booksPage";
import { BlogPage } from "../../routes/blog/blogPage";
import { Footer } from "../Footer";
import { ThemeProvider } from "@mui/system";
import { StyledDiv } from "./styles";
import { NavBar } from "../NavBar";
import { createTheme } from "@mui/material";

type EmptyProps = Record<string, never>;

export const App: React.FC<EmptyProps> = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: `#1D2D44`,
      },
      secondary: {
        main: `#748CAB`,
      },
      text: {
        primary: `#FFF`,
      },
    },
  });

  return (
    <>
      <StyledDiv>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="books" element={<BooksPage />} />
              <Route path="blog" element={<BlogPage />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </StyledDiv>
    </>
  );
};
