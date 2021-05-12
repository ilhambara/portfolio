import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';
import components from '../../styles/Components.module.css';

const defaultEndpoint = 'https://dev.to/api/articles?username=ilhambara';

export const getStaticProps = async () => {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

export default function Blog({ posts }) {
  return (
    <div className={components.container}>
      <Head>
        <title>Blog | Next Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={components.main}>
        <div className={styles.page__title}>
          <h1>Blog</h1>
        </div>
        <div>
          {posts.map((post) => {
            return (
              <div className={styles.post__url}>
                <h3>{post.title}</h3>
                <p className={styles.text__dimmed}>
                  {post.readable_publish_date} — {post.tags}
                </p>
                <Link href={'/blog/' + post.id} key={post.id}>
                  <a>
                    <p>read full article</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={components.back__button}>
          <a href="/">&larr; Home</a>
        </div>
      </main>
    </div>
  );
}
