import React from 'react'
import mainstyles from './css/MainContent.module.css'
import styles from './css/Pricing.module.css'
import premiumIcon from '../assets/premium_icon.svg'
import popularIcon from '../assets/popular_icon.svg'


const Pricing: React.FC = () => {
    return (
        <section className={mainstyles.contentSection}>
            <h1>P<span>ricing</span></h1>
            <div className={mainstyles.border}></div>
            <ul className={styles.pricingList}>
                <li>
                    <img src={popularIcon} alt="Popular Icon" />
                    <h5>Popular</h5>
                    <div>
                        <span>$</span>
                        <span>20</span>
                        <span>hour</span>
                    </div>
                    <ul className={styles.pricingListItems}>
                        <li><p>Web Development</p></li>
                        <li><p>Advertising</p></li>
                        <li><p>Game Development</p></li>
                        <li><p>Music Writing</p></li>
                        <li><p>Photography</p></li>
                    </ul>
                    <div className={mainstyles.border}></div>
                    <button><span>ORDER NOW</span>  &#62;<span></span></button>
                </li>
                <li>
                    <img src={premiumIcon} alt="Premium Icon" />
                    <h5>Premium</h5>
                    <div>
                        <span>$</span>
                        <span>49</span>
                        <span>hour</span>
                    </div>
                    <ul className={styles.pricingListItems}>
                        <li><p>Web Development</p></li>
                        <li><p>Advertising</p></li>
                        <li><p>Game Development</p></li>
                        <li><p>Music Writing</p></li>
                        <li><p>Photography</p></li>
                    </ul>
                    <div className={mainstyles.border}></div>
                    <button><span>ORDER NOW</span>  &#62;<span></span></button>
                </li>
            </ul>
        </section>
        )
};

export default Pricing;