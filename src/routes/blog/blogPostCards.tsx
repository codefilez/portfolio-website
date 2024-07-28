import { BlogPost } from "../../Types";
import { Card, CardContent } from "@mui/material";
import { humanFriendlyDate } from "../../utilty/timestampUtility";
import {
  StyledBlogPostCards,
  StyledBlogPostCard,
  StyledTypography,
  StyledTitleTypography,
} from "./styles";
import React from "react";

const toCard = (blogPost: BlogPost) => {
  return (
    <StyledBlogPostCard key={blogPost.id}>
      <Card
        variant={`outlined`}
        style={{
          opacity: `70%`,
          background: `transparent`,
          border: `none`,
        }}
      >
        <CardContent>
          <StyledTitleTypography>{blogPost.title}</StyledTitleTypography>
          <StyledTypography>{blogPost.text}</StyledTypography>
          <StyledTypography>
            {humanFriendlyDate(blogPost.timestamp)}
          </StyledTypography>
        </CardContent>
      </Card>
    </StyledBlogPostCard>
  );
};

const BlogPostCards = (blogPosts: Array<BlogPost>) => {
  const blogPostCards = blogPosts.map(toCard);

  return <StyledBlogPostCards>{blogPostCards}</StyledBlogPostCards>;
};

export default BlogPostCards;
