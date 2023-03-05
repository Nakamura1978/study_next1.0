import Head from 'next/head'
import { Slider } from '@/coponents/Slider'
import { Art } from '@/coponents/Art'


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
