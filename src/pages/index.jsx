import Head from 'next/head'
import { Main } from '@/coponents/Main'
import { Links } from '@/coponents/Links'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main title="Index Page" />
      <Links />
    </>
  )
}
