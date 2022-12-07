import { useEffect, useState } from 'react'
import styles from './AlertToast.module.scss'

type AlertToastType = {
    text: string, 
    callback: (key: number) => void,
    key: number
}


const AlertToast = ({text, callback, key} : AlertToastType) => {
    const [show, setShow] = useState(false) 
    
    useEffect(() => {
        setTimeout(() => setShow(true), 100)
    }, [])
    
    return (
        <div className={show ? [styles.AlertToastParent, styles.AlertToastParentShow].join(' ') : styles.AlertToastParent}>
            <h4>
                {text}
            </h4>
            <h4 className={styles.closeBtn} onClick={
                () => {
                    setShow(false)
                    setTimeout(() => callback(key) , 600)
                }
            }>x</h4>
        </div>
    )
}

export default AlertToast