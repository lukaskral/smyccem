import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  // coverImage: string;
  date: string;
  // excerpt: string;
  // author: Author;
  slug: string;
};

const LyricPreview = ({ title, date, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/Lyrics/${slug}`} href="/Lyrics/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default LyricPreview;
