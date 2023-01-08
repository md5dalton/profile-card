import Head from 'next/head'
import Image from 'next/image'
import { Kumbh_Sans  } from '@next/font/google'

const font = Kumbh_Sans({ 
  subsets: ['latin'],
  weight: ["400", "700"]
})

const Stat  = ({ count, name }) => (
    <li className="stat">
        <h2 className="text-bold count">{count}</h2>
        <div className="text-small stat-name">{name}</div>
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
      <main className={font.className}>
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
                    <h1 className="text-bold">Victor Crest</h1>
                    <div>26</div>
                </div>
                <div className="text-medium city">London</div>
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
