import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { getBlogPosts } from "../../api/BlogApi";
import { BlogPost } from "../../Types";
import BlogPostCards from "./blogPostCards";
import { mockBlogPosts } from "./mockBlogPosts";

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts()
      .then((data) => setBlogPosts(data.length > 0 ? data : mockBlogPosts))
      .catch(() => setBlogPosts(mockBlogPosts));
  }, []);

  return (
    <Container maxWidth="md" sx={{ pt: 8, pb: 10 }}>
      <Box sx={{ textAlign: `center`, mb: 6 }}>
        <Typography variant="h3" sx={{ mb: 1.5 }}>
          Blog
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: `auto` }}>
          Notes on software, racing, and whatever else I&apos;ve been thinking
          about lately.
        </Typography>
      </Box>
      <BlogPostCards blogPosts={blogPosts} />
    </Container>
  );
};
