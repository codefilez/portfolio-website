import styled from "@emotion/styled";
import { BlogPost } from "../../Types";
import { Card, CardContent, Typography } from "@mui/material";

const StyledBlogPostCard = styled.div({
  padding: `1rem`,
  width: `50%`,
  textAlign: `left`,
});

const StyledCardContent = styled.div({
  background: `black`,
  color: `white`,
});

export const BlogPostCardsWrapper = styled.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
});

const toCard = (blogPost: BlogPost) => {
  return (
    <StyledBlogPostCard key={blogPost.id}>
      <Card variant={`outlined`}>
        <StyledCardContent>
          <CardContent>
            <Typography sx={{ fontWeight: `bold` }}>
              {blogPost.title}
            </Typography>
            <Typography>{blogPost.text}</Typography>
            <Typography>{blogPost.timestamp}</Typography>
          </CardContent>
        </StyledCardContent>
      </Card>
    </StyledBlogPostCard>
  );
};

const BlogPostCards = (blogPosts: Array<BlogPost>) => {
  const blogPostCards = blogPosts.map(toCard);

  return <BlogPostCardsWrapper>{blogPostCards}</BlogPostCardsWrapper>;
};

export default BlogPostCards;
