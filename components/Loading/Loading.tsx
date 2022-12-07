import styles from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loadingParent}>
            <div className={styles.loadingBox}></div>
        </div>
    )
}

export default Loading