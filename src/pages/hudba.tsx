import Page from '../components/Page'
import { YouTubeEmbed } from '@next/third-parties/google'
import styles from './hudba.module.scss'

const Music = () => {
  return (
    <Page title="Hudba" bg="/assets/site/000.jpeg" opacity1="0.7" opacity2="0.9">
      <div className={styles.videos}>
        <YouTubeEmbed videoid="KhPOumBIdDs" height={400} />
        <YouTubeEmbed videoid="_4bQOxBw0EU" height={400} />
        <YouTubeEmbed videoid="NJj8siEYoYE" height={400} />
        <YouTubeEmbed videoid="miARZa2r_LY" height={400} />
        <YouTubeEmbed videoid="cGIr-o348DU" height={400} />
        <YouTubeEmbed videoid="iHll1Ynj9rg" height={400} />
        <YouTubeEmbed videoid="36Qg-NBwTxE" height={400} />
        <YouTubeEmbed videoid="pjyCtK5vHP4" height={400} />
        <YouTubeEmbed videoid="XcMHoApxLNk" height={400} />
      </div>
      <div style={{ color: 'white', marginBottom: '30px' }}>
        <span style={{ margin: '25px 4px', float: 'left' }}>Náš youtube kanál</span>
        <a href="https://www.youtube.com/@smyccem" style={{ margin: '20px 4px', float: 'left' }}>
          <img width="40px" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg" alt="Youtube Trhni si smyčcem" />
        </a>
      </div>
    </Page>
  )
}

export default Music
