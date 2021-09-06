import CoverImage from '../cover-image';
import Link from 'next/link';
import Author from '../../types/author';

type Props = {
    title: string,
    coverImage: string,
    date: string,
    excerpt: string,
    author: Author,
    slug: string,
};

const Hero = ({title, coverImage, date, excerpt, author, slug}: Props) => {
    return (
        <>
            {/* <CoverImage title={title} src={coverImage} slug={slug} /> */}
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <h1>
                    <a className="hover:underline">{title}</a>
                </h1>
            </Link>
            <p>{excerpt}</p>
        </>
    );
};

export default Hero;
