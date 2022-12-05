import BlueBtn from '../../components/BlueBtn/BlueBtn'
import styles from './Register.module.scss'

const Register = () => {
    return (
        <div className={styles.registerContainer}>
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
                    <div className={styles.registerForm}>
                        <div className={styles.inputMultForm}>
                            <input className={styles.inputForm} placeholder='First Name'></input>
                            <input className={styles.inputForm} placeholder='Last Name'></input>
                        </div>
                        <input className={styles.inputForm} placeholder='Username'></input>
                        <input className={styles.inputForm} placeholder='Email'></input>
                        <input className={styles.inputForm} placeholder='Password'></input>
                        <input className={styles.inputForm} placeholder='Phone Number'></input>
                    </div>
                    <div className={styles.registerBtn}>
                        <BlueBtn link='/register' text='Sign Up' type={0}></BlueBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register