import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getLyricBySlug, getAllLyrics } from '../../../lib/api'
import markdownToHtml from '../../../lib/markdownToHtml'
import React from 'react'
import LyricType from '../../types/lyric'
import LyricContent from '../../components/LyricContent/'

type Props = {
  lyric: LyricType
}

const Lyric = ({ lyric }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !lyric?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <LyricContent content={lyric.content} title={lyric.title} youtube={lyric.youtube} />
        </>
      )}
    </>
  )
}

export default Lyric

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const lyric = getLyricBySlug(params.slug, ['title', 'slug', 'youtube', 'content'])
  const content = await markdownToHtml(lyric.content || '')
  return {
    props: {
      lyric: {
        ...lyric,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const lyrics = getAllLyrics(['slug'])

  return {
    paths: lyrics.map((lyric) => {
      return {
        params: {
          slug: lyric.slug,
        },
      }
    }),
    fallback: false,
  }
}
