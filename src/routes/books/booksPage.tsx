import { Box, Container, Typography } from "@mui/material";
import { books } from "./bookData";
import { BookCard } from "./BookCard";
import { StyledBooksGrid } from "./styles";

export const BooksPage = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 10 }}>
      <Box sx={{ textAlign: `center`, mb: 6 }}>
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          Recently Read
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: `auto` }}>
          Short, honest notes on what I&apos;ve been reading — mostly software,
          occasionally not.
        </Typography>
      </Box>
      <StyledBooksGrid>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </StyledBooksGrid>
    </Container>
  );
};
