import Head from 'next/head'
import { Slider } from '@/coponents/Slider'
import { Art } from '@/coponents/Art'
import { Footer } from '@/coponents/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Slider />
      
      <Art />
    </>
  )
}
