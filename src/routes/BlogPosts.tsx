import { useEffect, useState } from "react";
import { getBlogPosts } from "../api/BlogApi";
import { BlogPost } from "../Types";

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return blogPosts.map(({ title, text, id }) => (
    <div key={id}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  ));
};

export default BlogPosts;
