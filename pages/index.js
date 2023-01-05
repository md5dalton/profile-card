import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

const Stat  = ({ count, name }) => (
    <li className="stat">
        <h2 className="count">{count}</h2>
        <h3 className="stat-name">{name}</h3>
    </li>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Profile card component</title>
        <meta name="description" content="Profile card component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Head>
      <main>
        <section className="card">
          <div className="card-content">
            <Image
                className="profile-image"
                src="/images/image-victor.jpg"
                width={96}
                height={96}
                alt="headshot of a man in a shirt and jacket with a mountainous blurred background"
            />
            <div className="details">
                <div className="name">
                    <h1>Ntate Mpiti</h1>
                    <span>26</span>
                </div>
                <h3 className="city">Qacha's Nek</h3>
            </div>
            <ul className="stats" role="list">
                <Stat name="followers" count="80k" />
                <Stat name="likes" count="803k" />
                <Stat name="photos" count="1.3k" />
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
