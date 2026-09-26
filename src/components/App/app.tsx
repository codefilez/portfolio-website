import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../../routes/welcome/WelcomePage";
import { BooksPage } from "../../routes/books/booksPage";
import { BlogPage } from "../../routes/blog/blogPage";
import { Footer } from "../Footer";
import { ThemeProvider } from "@mui/system";
import { StyledDiv } from "./styles";
import { NavBar } from "../NavBar";
import { createTheme, CssBaseline } from "@mui/material";

type EmptyProps = Record<string, never>;

export const App: React.FC<EmptyProps> = () => {
  const theme = createTheme({
    palette: {
      mode: `dark`,
      primary: {
        main: `#6366F1`,
        light: `#818CF8`,
        dark: `#4338CA`,
      },
      secondary: {
        main: `#22D3EE`,
      },
      background: {
        default: `#0A0E1A`,
        paper: `#121826`,
      },
      text: {
        primary: `#E6EDF3`,
        secondary: `#94A3B8`,
      },
      divider: `rgba(148, 163, 184, 0.16)`,
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: [
        `Inter`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `Segoe UI`,
        `Roboto`,
        `sans-serif`,
      ].join(`,`),
      h1: { fontWeight: 800, letterSpacing: `-0.03em` },
      h2: { fontWeight: 800, letterSpacing: `-0.02em` },
      h3: { fontWeight: 700, letterSpacing: `-0.01em` },
      h4: { fontWeight: 700 },
      button: { fontWeight: 600, textTransform: `none` },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: `none`,
            border: `1px solid rgba(148, 163, 184, 0.12)`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledDiv>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="books" element={<BooksPage />} />
              <Route path="blog" element={<BlogPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StyledDiv>
      </ThemeProvider>
    </>
  );
};
