import { useEffect, useState } from "react";
import { getBlogPosts } from "../../api/BlogApi";
import { BlogPost } from "../../Types";
import styled from "@emotion/styled";
import BlogPostCards from "./BlogPostCards";
import { StyledH1 } from "../../styling/StyledH1";

const CenteredDiv = styled.div({
  textAlign: `center`,
});

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return (
    <CenteredDiv>
      <StyledH1>Blog</StyledH1>
      {BlogPostCards(blogPosts)}
    </CenteredDiv>
  );
};

export default BlogPage;
