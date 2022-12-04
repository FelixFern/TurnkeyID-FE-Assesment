import styles from './CryptoPriceBox.module.scss'

type CryptoBoxProps = {
    image: string,
    crypto: string, 
    price: number,
}

const CryptoPriceBox = ({image, crypto, price} : CryptoBoxProps) => {
    return (
        <div className={styles.cryptoPriceBoxParent}> 
            <img src={image} alt={crypto} />
            <div className={styles.cryptoPrice}>
                <h3>{crypto}</h3>
                <h3 className={styles.price}>{price}</h3>
            </div>
        </div>
    )
}

export default CryptoPriceBox