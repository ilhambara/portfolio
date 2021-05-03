import Head from 'next/head';
import backButton from '../styles/Blog.module.css';
import styles from '../styles/Home.module.css';

const defaultEndpoint = 'https://dev.to/api/articles?username=ilhambara';

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default function Blog({ articles }) {
  console.log(articles);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Next Portfolio</title>
        <link rel="icon" href="https://raw.githubusercontent.com/ilhambara/nextjs-portfolio/main/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {articles.map((post) => {
            return (
              <a href={post.canonical_url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                {post.title}
                {/* <p>{post.tags}</p> */}
              </a>
            );
          })}
        </div>
        <div className={backButton.back__button}>
          <a href="/">&larr; Home</a>
        </div>
      </main>
    </div>
  );
}
