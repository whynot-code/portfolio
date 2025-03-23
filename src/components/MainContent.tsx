import React, { PropsWithChildren } from 'react';
import styles from './MainContent.module.css';  

const MainContent: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}

export default MainContent;