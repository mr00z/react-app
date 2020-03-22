import React from 'react';
import styles from './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href="https://bulma.io" className={styles.footer__img}>
            <img
              src="https://bulma.io/images/made-with-bulma--semiwhite.png"
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
        </p>
        <p>
          Genie icon created by{' '}
          <a href="https://thenounproject.com/naripuru/">parkjisun</a>. Logo
          created using{' '}
          <a href="https://www.namecheap.com/logo-maker">
            Namecheap&apos;s logo maker
          </a>
          . Font icons provided by{' '}
          <a href="https://icons8.com/line-awesome">Line Awesome</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
