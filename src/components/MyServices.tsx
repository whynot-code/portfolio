import React from 'react'
import styles from './MyServices.module.css'
import codeIcon from '../assets/code-icon.svg'
import musicIcon from '../assets/music-icon.svg'
import advertisingIcon from '../assets/a-icon.svg'
import gameIcon from '../assets/game-controller-icon.svg'

interface Data {
    titles: string[];
    descriptions: string[];
}

const data: Data = {
    titles: ['Web Development', 'Music Writing', 'Advetising', 'Game Development'],
    descriptions: [
    'Modern and mobile-ready website that will help you reach all of your marketing.',
    'Music copying, writing, creating, transcription, arranging and composition services.',
    'Advertising services include television, radio, print, mail, and web apps.',
    'Developing memorable and unique mobile android, ios and video games'
]
    }
const MyServices: React.FC = () => {
    return (
        <section className={styles.myServices}>
            <h1>My <span>Services</span></h1>
            <div className={styles.border}></div>
            <ul>
                <li className={styles.services}>
                    <div>
                        <img src={codeIcon} alt="codeIcon-svg" />
                    </div>
                    <h3>{data.titles[0]}</h3>
                    <p>{data.descriptions[0]}</p>
                </li>
                <li className={styles.services}>
                <div>
                        <img src={musicIcon} alt="musicIcon-svg" />
                    </div>
                    <h3>{data.titles[1]}</h3>
                    <p>{data.descriptions[1]}</p>
                </li>
                <li className={styles.services}>
                    <div>
                        <img src={advertisingIcon} alt="advetisingIcon-svg" />
                    </div>
                    <h3>{data.titles[2]}</h3>
                    <p>{data.descriptions[2]}</p>
                </li>
                <li className={styles.services}>
                    <div>
                        <img src={gameIcon} alt="gameIcon-svg" />
                    </div>
                    <h3>{data.titles[3]}</h3>
                    <p>{data.descriptions[3]}</p>
                </li>
            </ul>        
        </section>
    );
}

export default MyServices;