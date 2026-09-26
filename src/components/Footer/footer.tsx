import { Box, Container, Divider, Typography } from "@mui/material";
import { SocialBreadcrumbs } from "./socialBreadcrumbs";

export const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: `auto`, pt: 4 }}>
      <Container maxWidth="md">
        <Divider sx={{ mb: 3, borderColor: `rgba(148, 163, 184, 0.12)` }} />
        <Box sx={{ display: `flex`, flexDirection: `column`, alignItems: `center`, gap: 1.5, pb: 4 }}>
          <SocialBreadcrumbs />
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} run3wide (Paul Robson). Built with
            React, TypeScript, and MUI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
