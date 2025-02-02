import React from 'react';
import {getAllLyrics} from '../../../lib/api';
import LyricType from '../../types/lyric';
import Link from 'next/link';
import Page from '../../components/Page';
import styles from './Lyrics.module.scss';

type Props = {
    lyrics: LyricType[],
};

const Lyrics = ({lyrics}: Props) => {
    return (
        <Page title="Texty" bg="/assets/site/001.jpeg">
            <ul className={styles['lyrics']}>
                {lyrics.map(lyric => (
                    <li>
                        <Link href={`/texty/${lyric.slug}`}>
                            <a>{lyric.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Page>
    );
};

export default Lyrics;

export const getStaticProps = async () => {
    const lyrics = getAllLyrics(['title', 'slug']);

    return {
        props: {lyrics},
    };
};
