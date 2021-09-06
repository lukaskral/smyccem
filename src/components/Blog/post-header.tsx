import React from 'react';
import Author from '../../types/author';
import Avatar from '../avatar';
import CoverImage from '../cover-image';
import DateFormatter from '../../utils/date-formatter';
import PostTitle from './post-title';

type Props = {
    title: string,
    date: string,
    author: Author,
    coverImage: string,
};

const PostHeader = ({title, date, author, coverImage}: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <Avatar name={author.name} picture={author.picture} />
            {/* <CoverImage title={title} src={coverImage} /> */}
            <Avatar name={author.name} picture={author.picture} />
            <DateFormatter dateString={date} />
        </>
    );
};

export default PostHeader;
