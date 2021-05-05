import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};
