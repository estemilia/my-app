import Image from 'next/image'
import Header from '../components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
          <div>
            <Header />
            <p>
              테스트로 만들어본 페이지
            </p>
          </div>
        </main>
    )
}