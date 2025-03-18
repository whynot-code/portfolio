import React, { PropsWithChildren } from 'react';
import styles from './Header.module.css';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className={styles.head}>
            <img className={styles.img} src="" alt="" />
            <div className={styles.botom}></div>
            {children}
        </header>
    );
};

export default Header;
