import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ilham Bara | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.header__title}>
            <h1 className={styles.title}>
              Howdy, I am{' '}
              <a href="https://read.cv/ilhambara" target="_blank" rel="noopener noreferrer">
                Bara!
              </a>
            </h1>
            <p className={styles.description}>
              I often introduce myself as a <code className={styles.code}>web developer</code>
            </p>
          </div>
          <div className={styles.header__image}>
            <Image src="/img/memoji-me.png" width={240} height={240} alt="Home memoji" quality={90} />
          </div>
        </div>

        <div className={styles.grid}>
          <a href="https://github.com/ilhambara?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Take a quick visit to my side projects. Some already online, some haven't yet.</p>
          </a>

          <a href="/experiences" className={styles.card}>
            <h3>Experiences &rarr;</h3>
            <p>Selected events on my past appearances from various occasions.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Not a very good opinions and knowledges sharing but you will get the point.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>A further piece of information about myself in a well organized structure.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
