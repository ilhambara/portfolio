import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import footer from '../styles/Footer.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src="/ava.jpg" alt="Picture of the author" width={200} height={200} className={styles.avatar} />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>Ilham Bara</h1>
            <p className={styles.description}>Web Developer</p>
          </div>
        </div>
        <div className={styles.background__about}>
          <div className={styles.about}>
            <h3 className={styles.text__title}>About</h3>
            <p className={styles.text__desc}>Hi, I'm passionately curious about anything related to web development.</p>
            <p className={styles.text__desc}>I usually contribute to open source projects, exploring some useful resources, and taking any courses to rank up my skills. Also working on paid projects if there's opportunity.</p>
          </div>
          <div className={styles.techstacks}>
            <h3 className={styles.text__title}>Tech Stacks</h3>
            <div className={styles.grid__display}>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__desc}>Languages</h5>
                <ul className={styles.list__ul}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__desc}>Frameworks</h5>
                <ul className={styles.list__ul}>
                  <li>React JS</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                  <li>CodeIgniter</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__desc}>Tools & Infrastructures</h5>
                <ul className={styles.list__ul}>
                  <li>NPM (Node.js)</li>
                  <li>Git</li>
                  <li>Contentful</li>
                  <li>Vercel</li>
                  <li>Netlify</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.text__title}>Socials</h3>
            <ul className={styles.list__ul}>
              <li>
                GitHub –{' '}
                <span className={styles.text__span}>
                  <a href="https://github.com/ilhambara" target="_blank">
                    github.com/ilhambara
                  </a>
                </span>
              </li>
              <li>
                Dev.to –{' '}
                <span className={styles.text__span}>
                  <a href="https://dev.to/ilhambara" target="_blank">
                    dev.to/ilhambara
                  </a>
                </span>
              </li>
              <li>
                Twitter –{' '}
                <span className={styles.text__span}>
                  <a href="https://twitter.com/zgve679jdv" target="_blank">
                    twitter.com/zgve679jdv
                  </a>
                </span>
              </li>
            </ul>
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
