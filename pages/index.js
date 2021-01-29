import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ilham Bara | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Howdy, I am <a href="https://read.cv/ilhambara" target="_blank" rel="noopener noreferrer">Bara!</a>
        </h1>

        <p className={styles.description}>
          I often introduce myself as a {' '}
          <code className={styles.code}>web developer</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ilhambara?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Let's take a quick visit at my side projects. Some already online, some haven't yet.</p>
          </a>

          <a href="https://barathrum.me/#appearances" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Experiences &rarr;</h3>
            <p>Selected events on my past appearances before pandemic outbreak.</p>
          </a>

          <a href="https://dev.to/g2ailhammubarok" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Not a good opinion and knowledge share but you'll get the point.</p>
          </a>

          <a href="https://read.cv/ilhambara" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>A piece of standard information about myself in a well-organized structure.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
        <p>© 2021—present Ilham Bara.</p>
      </footer>
    </div>
  )
}
