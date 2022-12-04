import styles from './CryptoBox.module.scss'

type CryptoBoxProps = {
    image: string, 
    crypto: string
}


const CryptoBox = ({image, crypto}: CryptoBoxProps) => {
    return (
        <div className={styles.cryptoBoxContainer}>
            <img src={image} alt={crypto}/>
            <h2>{crypto}</h2>
        </div>
    )
}

export default CryptoBox