export type BlogPost = {
  id: string;
  text: string;
  title: string;
  timestamp: string;
  tags?: string[];
  readMinutes?: number;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  summary: string;
  tags: string[];
};
