import React from 'react';
import styles from './Navbar.scss'

const Navbar = () => {

return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.leftContainer}>
          <button
            onClick="" // Placeholder for sidebar toggle function
            className={styles.sidebarButton}
          >
          </button>

          <div className={styles.logoContainer}>
            <img
              src="https://via.placeholder.com/100x40?text=Logo"
              alt="Logo"
              className={styles.logo}
            />
          </div>
        </div>

        <button className={styles.loginButton}>Login</button>
      </nav>
    </>
);
}

export default Navbar;