import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import BlueBtn from '../BlueBtn/BlueBtn'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()
    const [showMenu, setShow] = useState(false)
    return (
        <>
            <div className={styles.navbarParent}>
                <div className={styles.navbarContent}>
                    <div className={styles.companyLogo} onClick={() => router.push('/')}>
                        <img src="../img/logo.svg" alt="logo-cryptolab" loading="lazy"/>
                        <h1>Crypto<span>LAB</span>
                        </h1>
                    </div>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>About</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Explore</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Learn</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Features</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                    </ul>
                    <div className={styles.cta}>
                        <BlueBtn link='/login' text='Join Now!' type={0}></BlueBtn>
                    </div>
                </div>
            </div>
            <div className={styles.navbarParentMobile}>
                <div className={styles.navbarContent}>
                    <div className={styles.companyLogo} onClick={() => router.push('/')}>
                        <img src="../img/logo.svg" alt="logo-cryptolab" loading="lazy"/>
                    </div>
                    <div className={styles.hamburgerMenu} onClick={() => setShow(!showMenu)}>
                        <div className={showMenu ? [styles.line, styles.line1].join(' ') : styles.line}></div>
                        <div className={showMenu ? [styles.line, styles.line2].join(' ') : styles.line}></div>
                        <div className={showMenu ? [styles.line, styles.line1].join(' ') : styles.line}></div>
                    </div>
                </div>
                <div className={showMenu ? [styles.navMenu, styles.showMenu].join(' '): styles.navMenu}>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>About</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Explore</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Learn</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={styles.navLink}>
                            <Link href="">
                                <h4>Features</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                        <li className={[styles.navLinkPrimary, styles.navLink].join(' ')}>
                            <Link href="/login">
                                <h4>Join Now!</h4>
                            </Link>
                            <div className={styles.navLinkIndicator}></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Navbar