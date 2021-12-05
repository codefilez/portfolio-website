import { useEffect, useState } from "react";
import { getBlogPosts } from "../api/BlogApi";
import { BlogPost } from "../Types";
import { Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BlogPostsWrapper = styled.div({
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

  const blogPostCards = blogPosts.map(({ title, text, id, timestamp }) => (
    <StyledBlogPostCard key={id}>
      <Card variant={`outlined`}>
        <CardContent>
          <Typography sx={{ fontWeight: `bold` }}>{title}</Typography>
          <Typography>{text}</Typography>
          <Typography>{timestamp}</Typography>
        </CardContent>
      </Card>
    </StyledBlogPostCard>
  ));

  return (
    <CenteredDiv>
      <h1>Blog</h1>
      <BlogPostsWrapper>{blogPostCards}</BlogPostsWrapper>
    </CenteredDiv>
  );
};

export default BlogPosts;
