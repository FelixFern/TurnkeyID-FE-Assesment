import Link from 'next/link'
import styles from './BlueBtn.module.scss'

type BtnProps = {
    text: string,
    link: string, 
    type: number | null
}

const BlueBtn = ({text, link, type} : BtnProps) => {

    if (type == 0) {
        return (
            <div className={styles.blueBtnContainer}>
                <Link href={link}>
                    <h1>
                        {text}
                    </h1>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={styles.blueBtnSecondaryContainer}>
                <Link href={link}>
                    <h1>
                        {text}
                    </h1>
                </Link>
            </div>
        )

    }
}

export default BlueBtn