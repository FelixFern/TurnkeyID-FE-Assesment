import {useEffect, useState} from 'react'
import AlertToast from '../../components/AlertToast/AlertToast'
import styles from './Register.module.scss'

type toastDataType = {
    text: string,
}

const Register = () => {
    const [firstName,
        setFirstName] = useState('')
    const [lastName,
        setLastName] = useState('')
    const [username,
        setUsername] = useState('')
    const [email,
        setEmail] = useState('')
    const [password,
        setPassword] = useState('')
    const [phoneNumber,
        setPhoneNumber] = useState('')

    const [toast, setToast] = useState<Array<toastDataType>>([])

    const handleSubmit = () => {
        if(firstName != '' && lastName != '' && username != '' && email != '' && password != '' && phoneNumber != '') {
            
        } else {
            setToast([...toast, {text:"Form is not completed"}])
        }
    }
    
    const removeToast = (index:number) => {
        const temp = toast
        temp.splice(index, 1)
        setToast(() => [...temp])
    }


    
    return (
        <div className={styles.registerContainer}>
            <div className={styles.toastListContainer}>
                {toast.map((data, index) => {
                    return (
                        <AlertToast text={data.text} callback={removeToast} key={index}></AlertToast>
                    )
                }
                )}
            </div>
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
                            <input className={styles.inputForm} placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            <input className={styles.inputForm} placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <input className={styles.inputForm} placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <input className={styles.inputForm} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input className={styles.inputForm} placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <input className={styles.inputForm} placeholder='Phone Number' type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div className={styles.registerBtn} onClick={() => handleSubmit()}>
                        <h1>
                            Sign Up
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register