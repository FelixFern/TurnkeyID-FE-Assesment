import styles from './ProvideInfoBox.module.scss'

type ProvideInfoBox = {
    icon: string,
    highlightedTitle: string,
    title: string,
    desc: string
}

const icons : any = {
    lightning: '../icon/lightning-icon.svg',
    userFriendly: '../icon/userFriendly-icon.svg',
    security: '../icon/security-icon.svg'
}

const ProvideInfoBox = ({icon, highlightedTitle, title, desc} : ProvideInfoBox) => {
    return (
        <div className={styles.provideInfoBoxContainer}>
            <div className={styles.header}>
                <img src={icons[icon]} alt='crypto-coin' loading="lazy"></img>
                <div className={styles.title}>
                    <h2 className={styles.highlighted}>{highlightedTitle}</h2>
                    <h2>{title}</h2>
                </div>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default ProvideInfoBox