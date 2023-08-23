import styles from './LyricContent.module.scss';
import Page from '../Page';
import Header from '../Menu';

type LyricContentProps = {
    content: string,
    title: string,
};

const LyricContent = ({content, title}: LyricContentProps) => {
    return (
        <Page title={title} bg="/assets/site/001.jpeg">
            {/* <h1>{title}</h1> */}
            <div className={styles['lyric-content']} dangerouslySetInnerHTML={{__html: content}} />
            <br />
            <hr className="noprint" />

            <em style={{color: 'white', fontStyle: 'italic', float: 'right', opacity: '.6'}}>
                <span className="printonly">Trhni si smyčcem / smyccem.cz</span> (Malá písmena značí
                akordy <b>Moll</b>, velká <b>Dur</b>
                <span className="noprint">, stránku ze tisknout</span>)
            </em>
        </Page>
    );
};

export default LyricContent;
