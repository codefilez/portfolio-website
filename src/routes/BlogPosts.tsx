import { useEffect, useState } from "react";
import { getBlogPosts } from "../api/BlogApi";
import { BlogPost } from "../Types";
import { Card, CardContent, Typography } from "@mui/material";

const BlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  const blogPostCards = blogPosts.map(({ title, text, id }) => (
    <Card key={id} variant={`outlined`}>
      <CardContent>
        <Typography variant={`h4`}>{title}</Typography>
        <Typography variant={`body1`}>{text}</Typography>
      </CardContent>
    </Card>
  ));

  return <div>{blogPostCards}</div>;
};

export default BlogPosts;
