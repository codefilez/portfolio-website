import { useEffect, useState } from "react";
import { getBlogPosts } from "../api/BlogApi";
import { BlogPost } from "../Types";

const Blogs = function blogs() {
  const [posts, setPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setPosts(data));
  }, []);

  return posts.map(({ title, text, id }) => (
    <div key={id}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  ));
};

export default Blogs;
