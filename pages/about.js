import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import components from '../styles/Components.module.css';

export default function About() {
  return (
    <div className={components.container}>
      <Head>
        <title>About | Next Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={components.main}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src="/img/ava.jpg" alt="picture of me" width={200} height={200} className={styles.avatar} />
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
                <h5 className={styles.text__title__ul}>Languages</h5>
                <ul className={styles.list__ul}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__title__ul}>Frameworks</h5>
                <ul className={styles.list__ul}>
                  <li>Next.js</li>
                  <li>Gatsby.js</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>CodeIgniter</li>
                </ul>
              </div>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__title__ul}>Infrastructures</h5>
                <ul className={styles.list__ul}>
                  <li>NPM (Node.js)</li>
                  <li>Vercel</li>
                  <li>Netlify</li>
                  <li>cPanel</li>
                  <li>GitHub Pages</li>
                </ul>
              </div>
              <div className={styles.grid__elements}>
                <h5 className={styles.text__title__ul}>Other Tools</h5>
                <ul className={styles.list__ul}>
                  <li>Contentful</li>
                  <li>Wordpress</li>
                  <li>Figma</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <h3 className={styles.text__title}>Socials</h3>
            <ul className={styles.list__ul}>
              <li className={styles.list__socials}>
                GitHub –{' '}
                <span className={styles.text__span}>
                  <a href="https://github.com/ilhambara" target="_blank">
                    github.com/ilhambara
                  </a>
                </span>
              </li>
              <li className={styles.list__socials}>
                LinkedIn –{' '}
                <span className={styles.text__span}>
                  <a href="https://www.linkedin.com/in/ilhambara/" target="_blank">
                    linkedin.com/in/ilhambara
                  </a>
                </span>
              </li>
              <li className={styles.list__socials}>
                Dev.to –{' '}
                <span className={styles.text__span}>
                  <a href="https://dev.to/ilhambara" target="_blank">
                    dev.to/ilhambara
                  </a>
                </span>
              </li>
              <li className={styles.list__socials}>
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
        <div className={components.back__button}>
          <a href="/">&larr; Home</a>
        </div>
      </main>
    </div>
  );
}
