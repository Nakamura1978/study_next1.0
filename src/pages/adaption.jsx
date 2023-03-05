import Head from 'next/head'
import { Main } from '@/coponents/Main'
import { MakeToDo } from '@/coponents/MakeToDo/MakeToDo';
import styles from "@/coponents/MakeToDo/MakeToDo.module.css"

const ToDo = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Main title="ToDo Page" />

      <MakeToDo {...props} />
    </>
  )
}

export default ToDo;