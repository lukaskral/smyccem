import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '../../components/Blog/post-body';
import {getPostBySlug, getAllPosts, getPostSlugs} from '../../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../../lib/markdownToHtml';
import PostType from '../../types/post';
import React from 'react';
import PostTitle from '../../components/Blog/post-title';
import PostHeader from '../../components/Blog/post-header';
import MoreStories from '../../components/Blog/more-stories';

type Props = {
    post: PostType,
    morePosts: PostType[],
    preview?: boolean,
};

const Post = ({post, morePosts, preview}: Props) => {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <>
            {router.isFallback ? (
                <PostTitle>Načítám</PostTitle>
            ) : (
                <>
                    <article className="mb-32">
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                        />
                        <PostBody content={post.content} />
                    </article>
                </>
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
    );
};

export default Post;

type Params = {
    params: {
        slug: string,
    },
};

export async function getStaticProps({params}: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'coverImage',
        'slug',
        'author',
        'content',
    ]);
    const content = await markdownToHtml(post.content || '');
    const morePosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]).filter(({slug}) => slug !== post.slug);

    return {
        props: {
            morePosts,
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map(posts => {
            return {
                params: {
                    slug: posts.slug,
                },
            };
        }),
        fallback: false,
    };
}
