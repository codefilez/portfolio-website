import { useEffect, useState } from "react";

const Blogs = function blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-api.run3wide.com/rest/blog-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return posts.map(({ title, text }) => (
    <div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  ));
};

export default Blogs;
