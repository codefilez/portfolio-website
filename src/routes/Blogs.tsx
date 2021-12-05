import { useEffect, useState } from "react";
// fetch("https://blog-api.run3wide.com/rest/blog-posts")

const Blogs = function blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-api.run3wide.com/rest/blog-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return posts.map(({ title }) => <p>{title}</p>);
};

export default Blogs;
