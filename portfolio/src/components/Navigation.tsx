import React, { PropsWithChildren } from 'react'
import styles from './Navigation.module.css'

const Navigation: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <nav className={styles.nav}>{children}</nav>
    );
};

export default Navigation;