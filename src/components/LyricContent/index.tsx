import styles from './LyricContent.module.scss';
import Page from '../Page';
import Header from '../Menu';

type LyricContentProps = {
    content: string,
    title: string,
};

const LyricContent = ({content, title}: LyricContentProps) => {
    return (
        <Page title={title} bg="/assets/site/005.jpeg">
            <div className={styles['lyric-content']} dangerouslySetInnerHTML={{__html: content}} />
        </Page>
    );
};

export default LyricContent;
