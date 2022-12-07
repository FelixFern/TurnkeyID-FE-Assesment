import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import AlertToast from '../../components/AlertToast/AlertToast'
import styles from './Register.module.scss'

type toastDataType = {
    text: string
}

const API_KEY = '5953195869:AAFPjedXZy9x3Pa9BwXWFRa7g_v1ndLK6HM'
const API_URL = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=-819106547&parse_mode=Markdown&text=`

const Register = () => {

    useEffect(() => {
        document.title = "Register | CryptoLAB"
    }, [])

    const router = useRouter()

    const [error,
        setError] = useState(false)
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
    const [confirmPassword,
        setConfirmPassword] = useState('')
    const [phoneNumber,
        setPhoneNumber] = useState('')
    const [toast,
        setToast] = useState < Array < toastDataType >> ([])

    const validateEmail = (email:string) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    const validatePassword = (password : string, confirmPassword : string) => {
        if (password.length < 8) {
            return {state: false, text: "Password need to be 8 in length or longer"}
        } else if (password !== confirmPassword) {
            return {state: false, text: "Password and confirmed password is not identical"}
        } else {
            return {state: true, text: ''}
        }
    }

    const handleSubmit = () => {
        setError(false)
        if (firstName != '' && lastName != '' && username != '' && email != '' && password != '' && phoneNumber != '' && confirmPassword != '') {
            if (!validatePassword(password, confirmPassword).state) {
                setError(true)
                setToast([
                    ...toast, {
                        text: validatePassword(password, confirmPassword).text
                    }
                ])
            } else if (!validateEmail(email)) {
                setError(true)
                setToast([
                    ...toast, {
                        text: "Email format is wrong"
                    }
                ])
            } else {
                router.push('/login')
                const send_text = `Akun baru terdaftar pada CryptoLAB dengan data sebagai berikut : || Nama : ${firstName} ${lastName} || Username : ${username} || Email : ${email} || No. Hp : ${phoneNumber}`
                fetch(API_URL + send_text).then((response) => response.json()).catch((err) => {
                    console.log(err.message)
                })
            }
        } else {
            setError(true)
            setToast([
                ...toast, {
                    text: "Form is not completed"
                }
            ])
        }
    }

    const removeToast = (index : number) => {
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
                })}
            </div>
            <div className={styles.leftCol}>
                <img src="../img/decentralized-illustration.svg"></img>
            </div>
            <div className={styles.rightCol}>
                <img className={styles.rightColBg} src="../img/login-bg.svg" alt=""/>
                <div className={styles.content}>
                    <div className={styles.companyLogo} onClick={() => {
                        router.push('/')
                    }}>
                        <img src="../img/logo.svg" alt=""/>
                        <h1>Crypto<span>LAB</span>
                        </h1>
                    </div>
                    <h2>Sign In</h2>
                    <div className={styles.registerForm}>
                        <div className={styles.inputMultForm}>
                            <input
                                className={(error) && firstName == ''
                                ? [styles.inputForm, styles.errorInput].join(' ')
                                : styles.inputForm}
                                placeholder='First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}></input>
                            <input
                                className={(error) && lastName == ''
                                ? [styles.inputForm, styles.errorInput].join(' ')
                                : styles.inputForm}
                                placeholder='Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}></input>
                        </div>
                        <input
                            className={(error) && username == ''
                            ? [styles.inputForm, styles.errorInput].join(' ')
                            : styles.inputForm}
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                        <input
                            className={(error) && email == ''
                            ? [styles.inputForm, styles.errorInput].join(' ')
                            : styles.inputForm}
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                        <input
                            className={(error) && password == ''
                            ? [styles.inputForm, styles.errorInput].join(' ')
                            : styles.inputForm}
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                        <input
                            className={(error) && confirmPassword == ''
                            ? [styles.inputForm, styles.errorInput].join(' ')
                            : styles.inputForm}
                            placeholder='Confirm Password'
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        <input
                            className={(error) && phoneNumber == ''
                            ? [styles.inputForm, styles.errorInput].join(' ')
                            : styles.inputForm}
                            placeholder='Phone Number'
                            type='number'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div className={styles.registerBtn} onClick={() => handleSubmit()}>
                        <h1>
                            Sign Up
                        </h1>
                    </div>
                    <div className={styles.haveAccount} onClick={() => {
                        router.push('/login')
                    }}>
                        <p>Already have an account ?</p>
                    </div>
                    {/* <div onClick={() => {hitAPI()}}>test</div> */}
                </div>
            </div>
        </div>
    )
}

export default Register