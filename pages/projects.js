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
        <h2 className={styles.title}>🔧 The `projects section` are still under development 🔨</h2>
        <Link href="https://github.com/ilhambara?tab=repositories">
          <a>
            <p className={styles.link}>Go to GitHub &rarr;</p>
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
