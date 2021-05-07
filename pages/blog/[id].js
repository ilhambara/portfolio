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
      <main className={components.main}>
        <div className={styles.posts}>
          <h3>{post.title}</h3>
          <p>{post.body_html}</p>
        </div>
      </main>
    </div>
  );
};

export default Posts;
