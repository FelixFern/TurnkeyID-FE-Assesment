import BlueBtn from '../BlueBtn/BlueBtn'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbarParent}>
            <div className={styles.navbarContent}>
                <div className={styles.companyLogo}>
                    <img src="../img/logo.svg" alt=""/>
                    <h1>Crypto<span>LAB</span>
                    </h1>
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>
                        <a href="">
                            <h4>About</h4>
                        </a>
                        <div className={styles.navLinkIndicator}></div>
                    </li>
                    <li className={styles.navLink}>
                        <a href="">
                            <h4>Explore</h4>
                        </a>
                        <div className={styles.navLinkIndicator}></div>
                    </li>
                    <li className={styles.navLink}>
                        <a href="">
                            <h4>Learn</h4>
                        </a>
                        <div className={styles.navLinkIndicator}></div>
                    </li>
                    <li className={styles.navLink}>
                        <a href="">
                            <h4>Features</h4>
                        </a>
                        <div className={styles.navLinkIndicator}></div>
                    </li>
                </ul>
                <div className={styles.cta}>
                    <BlueBtn link='' text='Join Now!'></BlueBtn>
                </div>
            </div>
        </div>
    )
}

export default Navbar