import Head from 'next/head'

export type HeadMetaProps = {
  pageTitle?: string
  description?: string
  ogImage?: string
}

const HeadMeta = ({ pageTitle, description, ogImage }: HeadMetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>{(pageTitle && pageTitle + " - ") + "Trhni si smyčcem"}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage ? ogImage : '/static/og-images/index.jpg'} />
      <meta name="fb:app_id" content="518936135263185" />
      <meta property="og:url" content='https://smyccem.cz' />
      <meta name="author" content="Trhni si smyčcem" />
      <meta property="og:site_name" content="Trhni si smyčcem" />
      <meta property="og:type" content="website" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#ffcd00" />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffcd00" />
    </Head>
  )
}

export default HeadMeta
