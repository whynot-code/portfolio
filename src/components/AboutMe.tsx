import React from 'react'
import styles from './css/AboutMe.module.css'

interface Data {
    age: number;
    residence: string;
    freelance: string;
    address: string;
    me: string;
    introduction: string;
}

const calculateAge = (birthYear: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
};

const AboutMe: React.FC = () => {
    const data: Data = {
        age: calculateAge(1993),
        residence: 'Poland',
        freelance: 'Available',
        address: 'Borkowo, Poland',
        me: 'I am Ryan Adlard,',
        introduction: 'web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique'
    }
    return (
        <section className={styles.contentSection}>
            <h1>About <span>Me</span></h1>
            <div className={styles.border}></div>
            <div>
                <div className={styles.introduction}>
                    <h4>{data.me}</h4>
                    <p>{data.introduction}</p>
                </div>
                <div className={styles.data}>
                    <ul>
                        <li>
                            <p>Age:</p>
                            <span>{data.age}</span>
                        </li>
                        <li>
                            <p>Residence:</p>
                            <span>Poland</span>
                        </li>
                        <li>
                            <p>Freelance:</p>
                            <span>Available</span>
                        </li>
                        <li>
                            <p>Address:</p>
                            <span>Borkowo, Poland</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default AboutMe;