import styles from './Page.module.scss'
import Menu from '../Menu'
import HeadMeta from '../HeadMeta'
import classnames from 'classnames'

export type PageProps = {
  title: string
  children: React.ReactNode
  bg?: string
  contentAlign?: 'bottom' | 'center' | 'top'
}

const Page = ({ title, bg, children, contentAlign }: PageProps) => {
  return (
    <>
      <HeadMeta pageTitle={title} />
      <div
        className={styles['page']}
        style={{
          background: bg && 'linear-gradient(45deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%), url(' + bg + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles['page__menu']}>
          <Menu />
        </div>

        <div className={styles['page__title']}>
          <h1>{title}</h1>
        </div>

        <div className={classnames(styles['page__content'], styles['page__content--' + contentAlign])}>
          <div className={styles['title-mobile']}>
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Page
