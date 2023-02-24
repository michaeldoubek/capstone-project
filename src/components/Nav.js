import { useState } from 'react';
import styles from './Nav.module.css';
import logo from '../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../assets/icon-hamburger-menu.svg';

function Nav() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpened = () => setIsOpened((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper} aria-hidden>
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>

        <div className={styles.hamburger} onClick={toggleOpened}>
          <MenuIcon />
        </div>

        <menu className={isOpened ? styles.opened : null}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </menu>
      </div>
    </nav>
  );
}

export default Nav;
