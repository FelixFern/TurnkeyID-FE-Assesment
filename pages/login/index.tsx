import Link from 'next/link'
import BlueBtn from '../../components/BlueBtn/BlueBtn'
import styles from './Login.module.scss'

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.leftCol}>
                <img src="../img/decentralized-illustration.svg"></img>
            </div>
            <div className={styles.rightCol}>
                <img className={styles.rightColBg} src="../img/login-bg.svg" alt=""/>
                <div className={styles.content}>
                    <div className={styles.companyLogo}>
                        <img src="../img/logo.svg" alt=""/>
                        <h1>Crypto<span>LAB</span>
                        </h1>
                    </div>
                    <h2>Sign In</h2>
                    <div className={styles.loginForm}>
                        <input className={styles.inputForm} placeholder='Username / Email'></input>
                        <input className={styles.inputForm} placeholder='Password'></input>
                    </div>
                    <Link href="#">
                        <p>Forgot Password?</p>
                    </Link>
                    <div className={styles.loginBtn}>
                        <BlueBtn link='#' text='Sign In' type={0}></BlueBtn>
                        <BlueBtn link='/register' text='Sign Up' type={1}></BlueBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login