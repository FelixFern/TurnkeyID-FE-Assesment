import styles from './BlueBtn.module.scss'

type BtnProps = {
    text: string,
    link: string
}

const BlueBtn = ({text, link} : BtnProps) => {
    return (
        <div className={styles.blueBtnContainer}>
            <h1>
                {text}
            </h1>
        </div>
    )
}

export default BlueBtn