import footer from '../styles/Components.module.css';

export const Footer = () => {
  return (
    <div>
      <footer className={footer.footer__flex}>
        <div className={footer.footer__div}>
          <p>
            Made using{' '}
            <span className={footer.text__span}>
              <a href="https://nextjs.org/">Next.js</a>
            </span>{' '}
            and API from{' '}
            <span className={footer.text__span}>
              <a href="https://docs.forem.com/api/">DEV</a>
            </span>
            . Hosted on{' '}
            <span className={footer.text__span}>
              <a href="https://vercel.com/">Vercel</a>
            </span>
            .
          </p>
        </div>
        <div className={footer.footer__div__copyright}>
          <p>© 2021—present Ilham Bara.</p>
        </div>
      </footer>
    </div>
  );
};
