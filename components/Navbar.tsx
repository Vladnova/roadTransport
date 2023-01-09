import styles from '../styles/Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.wrap}>
    <h1>Logo</h1>
    <div>
      <a className={styles.nav} href="">
        Головна
      </a>
      <a className={styles.nav} href="">
        Про нас
      </a>
      <a className={styles.nav} href="">
        Послуги
      </a>
      <a className={styles.nav} href="">
        Контакти
      </a>
    </div>
  </nav>
);

export default Navbar;
