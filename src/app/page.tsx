import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen w-screen flex flex-col justify-center'>
      <h1 className='text-3xl font-bold text-center'>Welcome to hatland.dev</h1>
    </main>
  )
}

export const metadata = {
  title: 'My App'
}