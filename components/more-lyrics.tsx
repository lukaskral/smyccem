import Post from "../types/post";
import React from "react";
import LyricPreview from "./lyrics-preview";

type Props = {
  posts: Post[];
};

const MoreLyrics = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Lyrics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {/* {posts.map((post) => (
          // <LyricPreview key={post.slug} date={post.date} slug={post.slug} />
        ))} */}
      </div>
    </section>
  );
};

export default MoreLyrics;
