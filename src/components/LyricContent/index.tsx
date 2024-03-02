import styles from './LyricContent.module.scss'
import Page from '../Page'
import Header from '../Menu'

type LyricContentProps = {
  content: string
  title: string
  youtube?: string
}

const LyricContent = ({ content, title, youtube }: LyricContentProps) => {
  return (
    <Page title={title} bg="/assets/site/001.jpeg">
      {/* <h1>{title}</h1> */}
      {youtube && (
        <iframe
          className="noprint"
          width="560"
          height="315"
          src={youtube}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="noprint"></div>
      <div className={styles['lyric-content']} dangerouslySetInnerHTML={{ __html: content }} />
      <br />
      <hr className="noprint" />
      <em style={{ color: 'white', fontStyle: 'italic', float: 'right', opacity: '.6' }}>
        <span className="printonly">Trhni si smyčcem / smyccem.cz</span> (Malá písmena značí akordy <b>Moll</b>, velká <b>Dur</b>
        <span className="noprint">, stránku ze tisknout</span>)
      </em>
    </Page>
  )
}

export default LyricContent
