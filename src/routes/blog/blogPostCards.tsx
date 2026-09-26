import { BlogPost } from "../../Types";
import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { humanFriendlyDate } from "../../utilty/timestampUtility";
import { StyledBlogPostCards, StyledBlogPostCard } from "./styles";
import React from "react";

type Props = {
  blogPosts: Array<BlogPost>;
};

const toCard = (blogPost: BlogPost) => {
  return (
    <StyledBlogPostCard key={blogPost.id}>
      <Card sx={{ bgcolor: `background.paper` }}>
        <CardContent>
          <Stack
            direction="row"
            sx={{ justifyContent: `space-between`, alignItems: `flex-start`, flexWrap: `wrap`, mb: 1 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {blogPost.title}
            </Typography>
            {blogPost.readMinutes && (
              <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: `nowrap`, pl: 1 }}>
                {blogPost.readMinutes} min read
              </Typography>
            )}
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {blogPost.text}
          </Typography>
          <Stack
            direction="row"
            sx={{ justifyContent: `space-between`, alignItems: `center`, flexWrap: `wrap` }}
          >
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: `wrap` }}>
              {blogPost.tags?.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{ bgcolor: `rgba(99,102,241,0.12)`, color: `primary.light` }}
                />
              ))}
            </Stack>
            <Typography variant="caption" color="text.secondary">
              {humanFriendlyDate(blogPost.timestamp)}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </StyledBlogPostCard>
  );
};

const BlogPostCards = ({ blogPosts }: Props) => {
  const blogPostCards = blogPosts.map(toCard);

  return <StyledBlogPostCards>{blogPostCards}</StyledBlogPostCards>;
};

export default BlogPostCards;
