import { useEffect, useState } from "react";
import { getBlogPosts } from "../api/BlogApi";
import { BlogPost } from "../Types";
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BlogPostCardsWrapper = styled.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
});

const StyledBlogPostCard = styled.div({
  padding: `1rem`,
  width: `50%`,
  textAlign: `left`,
});

const CenteredDiv = styled.div({
  textAlign: `center`,
});

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  const blogPostCards = blogPosts.map(buildBlogPostCard);

  return (
    <CenteredDiv>
      <h1>Blog</h1>
      <BlogPostCardsWrapper>{blogPostCards}</BlogPostCardsWrapper>
    </CenteredDiv>
  );
};

const buildBlogPostCard = (blogPost: BlogPost) => {
  return (
    <StyledBlogPostCard key={blogPost.id}>
      <Card variant={`outlined`}>
        <CardContent>
          <Typography sx={{ fontWeight: `bold` }}>{blogPost.title}</Typography>
          <Typography>{blogPost.text}</Typography>
          <Typography>{blogPost.timestamp}</Typography>
        </CardContent>
      </Card>
    </StyledBlogPostCard>
  );
};

export default BlogPosts;
