import { BlogPost } from "../Types";

export async function getBlogPosts(): Promise<Array<BlogPost>> {
  return fetch(`https://blog-api.run3wide.com/rest/blog-posts`).then(
    (response) => response.json()
  );
}
