import { useEffect, useState } from "react";
import { getBlogPosts } from "../../api/BlogApi";
import { BlogPost } from "../../Types";
import BlogPostCards from "./blogPostCards";
import { CenteredDiv } from "../../styling/CenteredDiv";

export const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return <CenteredDiv>{BlogPostCards(blogPosts)}</CenteredDiv>;
};
