import Head from 'next/head';
import Link from 'next/link';
import components from '../styles/Components.module.css';
import styles from '../styles/Projects.module.css';

const projects = () => {
  return (
    <div className={components.container}>
      <Head>
        <title>Projects | Next Portfolio</title>
      </Head>

      <main className={components.main}>
        <h2 className={styles.title}>You're going to visit the `project-section` in a different domain</h2>
        <Link href="https://project-bara.vercel.app/">
          <a>
            <p className={styles.link}>Proceed Anyway &rarr;</p>
          </a>
        </Link>
        <div className={components.back__button}>
          <a href="/">&larr; Back to Home</a>
        </div>
      </main>
    </div>
  );
};

export default projects;
