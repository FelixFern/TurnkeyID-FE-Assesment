import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BlueBtn from '../../components/BlueBtn/BlueBtn'
import styles from './Login.module.scss'

const Login = () => {
    useEffect(() => {
        document.title = "Login | CryptoLAB"
    }, [])
    
    const router = useRouter()
    
    return (
        <div className={styles.loginContainer}>
            <div className={styles.leftCol}>
                <img src="../img/decentralized-illustration.svg" alt='decentralized-illustration' loading="lazy"></img>
            </div>
            <div className={styles.rightCol}>
                <img src="../img/login-bg.svg" alt='login-bg' className={styles.rightColBg} loading="lazy"/>
                <div className={styles.content}>
                    <div className={styles.companyLogo} onClick={() => {
                        router.push('/')
                    }}>
                        <img src="../img/logo.svg" loading="lazy"/>
                        <h1>Crypto<span>LAB</span>
                        </h1>
                    </div>
                    <h2>Sign In</h2>
                    <div className={styles.loginForm}>
                        <input className={styles.inputForm} placeholder='Username / Email'></input>
                        <input className={styles.inputForm} placeholder='Password' type='password'></input>
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