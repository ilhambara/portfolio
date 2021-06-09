import Image from 'next/image';
import styles from '../styles/Home.module.css';
import components from '../styles/Components.module.css';
import { motion } from 'framer-motion';
import { OpenGraph } from '../components/OpenGraph';

export default function Home() {
  return (
    <div className={components.container}>
      <OpenGraph />

      <main className={components.main}>
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
          <motion.div
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
            dragElastic={0.15}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
            className={styles.header__image}
          >
            <Image src="/img/memoji-me.png" width={240} height={240} alt="Home memoji" quality={90} />
          </motion.div>
        </div>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Take a glance at my side projects. Some already online, the others are still in development.</p>
          </a>

          <a href="/experiences" className={styles.card}>
            <h3>Experiences &rarr;</h3>
            <p>Selected events on my past appearances from various occasions.</p>
          </a>

          <a href="/blog" className={styles.card}>
            <h3>Blog &rarr;</h3>
            <p>Not a very good opinions and knowledges share but you will get the point.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>A further piece of information about myself in a well-organized structure.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
