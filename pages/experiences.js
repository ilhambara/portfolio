import Head from 'next/head';
import { HiLocationMarker, HiChatAlt2, HiPresentationChartLine } from 'react-icons/hi';
import styles from '../styles/Experiences.module.css';
import footer from '../styles/Footer.module.css';

export default function Experiences() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experiences | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Experiences</h1>
        </div>
        <div className={styles.background__experiences}>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <HiLocationMarker size={70} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Experience 1</h3>
              <p>Some information about this experience</p>
              <p>Tag 1, Tag 2, Tag 3</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <HiChatAlt2 size={70} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Experience 2</h3>
              <p>Some information about this experience</p>
              <p>Tag 1, Tag 2, Tag 3</p>
            </div>
          </div>
          <hr className={styles.hr__line}></hr>
          <div className={styles.experiences}>
            <div className={styles.icon__experiences}>
              <HiPresentationChartLine size={70} />
            </div>
            <div className={styles.detail__experiences}>
              <h3>Experience 3</h3>
              <p>Some information about this experience</p>
              <p>Tag 1, Tag 2, Tag 3</p>
            </div>
          </div>
        </div>
        <div className={styles.back__button}>
          <a href="/">&larr; Home</a>
        </div>
      </main>

      <footer className={footer.footer__flex}>
        <div className={footer.footer__div}>
          <p>
            Made using{' '}
            <span className={footer.text__span}>
              <a href="https://nextjs.org/">Next.js</a>
            </span>
            . Hosted on{' '}
            <span className={footer.text__span}>
              <a href="https://vercel.com/">Vercel</a>
            </span>
            .
          </p>
        </div>
        <div className={footer.footer__div}>
          <p>© 2021—present Ilham Bara.</p>
        </div>
      </footer>
    </div>
  );
}
