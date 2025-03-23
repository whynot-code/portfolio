import React, { PropsWithChildren } from 'react';
import styles from './Header.module.css';
import Portrait from '../assets/portrait-template.webp';
import Github from '../assets/github_logo.svg';
import LinkedIn from '../assets/linkedin_logo.svg';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className={styles.head}>
            <div className={styles.img}>
                <img src={Portrait} alt="Portrait" />
            </div>
            <div className={styles.botom}>
                <h1>Kyrtap Akores</h1>
                <h2>Frontend Dev</h2>
                <ul className={styles.social}>
                    <a href="">
                        <li>
                            <img src={Github} alt="github-logo" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={LinkedIn} alt="linkedin-logo" />
                        </li>
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
