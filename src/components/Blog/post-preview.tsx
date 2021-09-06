import Link from 'next/link';
import React from 'react';
import Author from '../../types/author';
import CoverImage from '../cover-image';

type Props = {
    title: string,
    coverImage: string,
    date: string,
    excerpt: string,
    author: Author,
    slug: string,
};

const PostPreview = ({title, coverImage, date, excerpt, author, slug}: Props) => {
    return (
        <>
            {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <a className="hover:underline">{title}</a>
            </Link>

            <p>{excerpt}</p>
        </>
    );
};

export default PostPreview;
