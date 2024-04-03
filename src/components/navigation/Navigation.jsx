import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navberImage}>
        <img src="/images/usman-logo.png" alt="logo" />
      </div>
      <div className={styles.navbarLinks}>
        <ul className={styles.links}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation