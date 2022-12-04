import styles from './CryptoPriceBox.module.scss'

type CryptoBoxProps = {
    image: string,
    crypto: string, 
    price: number,
    change: number,
}

const CryptoPriceBox = ({image, crypto, price, change} : CryptoBoxProps) => {
    console.log(change)
    return (
        <div className={styles.cryptoPriceBoxParent}> 
            <img src={image} alt={crypto} />
            <div className={styles.cryptoPrice}>
                <h3>{crypto}</h3>
                <h3 className={change > 0 ? styles.priceUp : styles.priceDown}>{price}</h3>
            </div>
        </div>
    )
}

export default CryptoPriceBox