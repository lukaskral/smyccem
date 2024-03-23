import styles from './LyricContent.module.scss'
import Page from '../Page'
import { YouTubeEmbed } from '@next/third-parties/google'

type LyricContentProps = {
  content: string
  title: string
  youtube?: string
}

const LyricContent = ({ content, title, youtube }: LyricContentProps) => {
  return (
    <Page title={title} bg="/assets/site/001.jpeg" opacity1="0.9" opacity2="0.5">
      {/* <h1>{title}</h1> */}
      {youtube && (
        <div className="noprint">
          <YouTubeEmbed videoid={youtube} height={400} />
        </div>
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
