import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered is-size-7-mobile is-size-6-tablet">
        <p>
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--semiwhite.png"
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
        </p>
        <p>
          Genie icon created by <a href="https://thenounproject.com/naripuru/">parkjisun</a>. Logo created using{' '}
          <a href="https://www.namecheap.com/logo-maker">Namecheap&apos;s logo maker</a>. Font icons provided by{' '}
          <a href="https://icons8.com/line-awesome">Line Awesome</a>.
        </p>
        <p>
          Songs/moods matching data scraped from <a href="https://www.allmusic.com">allmusic.com</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
