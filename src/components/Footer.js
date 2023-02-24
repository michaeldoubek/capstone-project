import styles from './Footer.module.css';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper} aria-hidden>
        <img src={logo} alt="logo" />

        <nav>
          <h3>Navigation</h3>

          <menu>
            <li>
              <a href="#">Homepage</a>
            </li>
            <li>
              <a href="#">Order a delivery</a>
            </li>
            <li>
              <a href="#">Reserve a table</a>
            </li>
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </menu>
        </nav>

        <article>
          <h3>Contacts</h3>

          <p>1234 Main St</p>
          <p>+1 123 456 789</p>
          <p>info@littlelemon.exampledomain</p>
        </article>

        <article>
          <h3>Social media links</h3>

          <menu>
            <li>
              <a href="facebook.com" target="_blank">
                Facebook
              </a>
            </li>

            <li>
              <a href="instagram.com" target="_blank">
                Instagram
              </a>
            </li>

            <li>
              <a href="twitter.com" target="_blank">
                Twitter
              </a>
            </li>
          </menu>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
