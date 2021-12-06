import styled from "@emotion/styled";
import { BlogPost } from "../../Types";
import { Card, CardContent, Typography } from "@mui/material";
import { humanFriendlyDate } from "../../utilty/TimestampUtility";

const StyledBlogPostCard = styled.div({
  padding: `1rem`,
  width: `50%`,
  textAlign: `left`,
});

export const BlogPostCardsWrapper = styled.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
});

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
          <Typography style={{ color: `white` }} sx={{ fontWeight: `bold` }}>
            {blogPost.title}
          </Typography>
          <Typography style={{ color: `white` }}>{blogPost.text}</Typography>
          <Typography style={{ color: `white` }}>
            {humanFriendlyDate(blogPost.timestamp)}
          </Typography>
        </CardContent>
      </Card>
    </StyledBlogPostCard>
  );
};

const BlogPostCards = (blogPosts: Array<BlogPost>) => {
  const blogPostCards = blogPosts.map(toCard);

  return <BlogPostCardsWrapper>{blogPostCards}</BlogPostCardsWrapper>;
};

export default BlogPostCards;
