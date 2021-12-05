import { useEffect, useState } from "react";
import { getBlogPosts } from "../../api/BlogApi";
import { BlogPost } from "../../Types";
import styled from "@emotion/styled";
import BlogPostCards from "./BlogPostCard";

const CenteredDiv = styled.div({
  textAlign: `center`,
});

const BlogPostPage = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return (
    <CenteredDiv>
      <h1>Blog</h1>
      {BlogPostCards(blogPosts)}
    </CenteredDiv>
  );
};

export default BlogPostPage;
