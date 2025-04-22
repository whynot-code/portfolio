import React from 'react'
import styles from './css/Navigation.module.css'
import About from '../assets/about_icon.svg'
import Works from '../assets/works_icon.svg'
import Email from '../assets/email_icon.svg'

import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link to="/" >
                <button
                    className={styles.navButton}
                
                >
                    <img src={About} alt="About-icon" />
                    <p>About</p>
                </button>
            </Link>
            <Link to="/works">
                <button className={styles.navButton}>
                    <img src={Works} alt="Works-icon" />
                    <p>Works</p>
                </button>
            </Link>
            <Link to="/contact">
                <button className={styles.navButton}>
                    <img src={Email} alt="Email-icon" />
                    <p>Contact</p>
                </button>
            </Link>
        </nav>
    );
};
export default Navigation;