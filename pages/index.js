import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import components from '../styles/Components.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={components.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="description"
          content={
            "Hi, I'm passionately curious about anything related to web development. I usually contribute to open source projects, exploring some useful resources, and taking any courses to rank up my skills. Also working on paid projects if there's opportunity."
          }
          key="ogdesc"
        />
        <meta property="og:url" content={'https://ilhambara.vercel.app/'} key="ogurl" />
        <meta property="og:image" content={'https://res.cloudinary.com/drixfgugx/image/upload/v1620498970/web-v3/og-image_zzoxrr.png'} key="ogimage" />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:site_name" content={'Ilham Bara | Next Portfolio'} key="ogsitename" />
        <meta property="og:title" content={'Portfolio Website'} key="ogtitle" />
        <meta property="og:description" content={'Ilham Bara is a passionate and curious web developer. Doing anything related to web dev things.'} key="ogdesc" />
        <meta name="twitter:title" content={'Ilham Bara | Next Portfolio'} />
        <meta name="twitter:description" content={'Ilham Bara is a passionate and curious web developer. Doing anything related to web dev things.'} />
        <meta name="twitter:image" content={'https://res.cloudinary.com/drixfgugx/image/upload/v1620498970/web-v3/og-image_zzoxrr.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={'@zgve679jdv'} />
        <meta name="twitter:creator" content={'@zgve679jdv'} />
        <title>Ilham Bara | Next Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
