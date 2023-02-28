import Head from 'next/head'
import { Main } from '@/coponents/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main title="Index Page" />
    </>
  )
}
