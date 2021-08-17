import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  ogImage: string;
  author: Author;
  excerpt: string;
  ent: string;
  content: string;
};

export default PostType;
