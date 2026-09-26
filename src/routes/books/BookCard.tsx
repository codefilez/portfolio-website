import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { Book } from "../../Types";

type Props = {
  book: Book;
};

export const BookCard = ({ book }: Props) => (
  <Card sx={{ height: `100%`, bgcolor: `background.paper`, display: `flex`, flexDirection: `column` }}>
    <CardContent sx={{ display: `flex`, flexDirection: `column`, height: `100%` }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.25 }}>
        {book.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
        {book.author}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
        {book.summary}
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: `wrap` }}>
        {book.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" sx={{ bgcolor: `rgba(34,211,238,0.1)`, color: `secondary.main` }} />
        ))}
      </Stack>
    </CardContent>
  </Card>
);
