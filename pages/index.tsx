import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hatland.dev</title>
        <meta name="description" content="My webpage" />
      </Head>
      <main className='h-screen w-screen flex flex-col justify-center'>
        <h1 className='text-3xl font-bold underline text-center'>Welcome to hatland.dev</h1>
      </main>
    </>
  )
}
