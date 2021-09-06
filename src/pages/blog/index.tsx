import MoreStories from '../../components/Blog/more-stories';
import Hero from '../../components/Blog/hero';
import Page from '../../components/Page';
import {getAllPosts} from '../../../lib/api';
import Post from '../../types/post';

type Props = {
    allPosts: Post[],
};

const Blog = ({allPosts}: Props) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <Page title="Blog" bg="/assets/site/003.jpeg">
            {heroPost && (
                <Hero
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Page>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

    return {
        props: {allPosts},
    };
};
