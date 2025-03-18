import React, { PropsWithChildren } from 'react';
import styles from './Header.module.css';
import Portrait from '../assets/portrait-template.webp';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className={styles.head}>
            <div className={styles.img}>
                <img src={Portrait} alt="Portrait" />
            </div>
            <div className={styles.botom}>
                <h1>Patryk Seroka</h1>
                <ul className={styles.social}>
                    <a href="">
                        <li>Fb</li>
                    </a>
                    <a href="">
                        <li>GH</li>
                    </a>
                    <a href="">
                        <li>In</li>
                    </a>
                </ul>
                <div className={styles.buttons}>
                    <button type='submit'>Download CV</button>
                    <button type='submit'>Contact Me</button>
                </div>
            </div>
            {children}
        </header>
    );
};

export default Header;
