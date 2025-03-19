import React from 'react'
import styles from './Navigation.module.css'
import About from '../assets/about_icon.svg'
import Works from '../assets/works_icon.svg'
import Email from '../assets/email_icon.svg'

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <button className={styles.navButton}>
                <img src={About} alt="About-icon" />
                <p>About</p>
            </button>
            <button className={styles.navButton}>
                <img src={Works} alt="Works-icon" />
                <p>Works</p>
            </button>
            <button className={styles.navButton}>
                <img src={Email} alt="Email-icon" />
                <p>Contact</p>
            </button>
        </nav>
    );
};

export default Navigation;