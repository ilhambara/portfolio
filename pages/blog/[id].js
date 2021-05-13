import Head from 'next/head';
import styles from '../../styles/Blog.module.css';
import components from '../../styles/Components.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('https://dev.to/api/articles?username=ilhambara');
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://dev.to/api/articles/' + id);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

const Posts = ({ post }) => {
  return (
    <div className={components.container}>
      <Head>
        <title>{post.title} | Next Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={components.main}>
        <div className={styles.posts}>
          <h3>{post.title}</h3>
          <div className={styles.posts__body} dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </div>
        <div className={components.back__button}>
          <a href="/blog">&larr; Blog</a>
        </div>
      </main>
    </div>
  );
};

export default Posts;
