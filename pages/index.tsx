import Head from 'next/head'
import Image from 'next/image'
import BlueBtn from '../components/BlueBtn/BlueBtn'
import CryptoPriceBox from '../components/CryptoPriceBox/CryptoPriceBox'
import Navbar from '../components/Navbar/Navbar'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | CryptoLAB</title>
                <meta name="description" content="Decentralized crypto exchange"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar></Navbar>
            <div className={styles.hero}>
                <img src="../img/hero-bg.svg" className={styles.heroBackground}/>
                <div className={styles.heroContent}>
                    <div className={styles.leftCol}>
                        <h1>Grab on the
                            <br/>
                            <span>Cryptocurrencies</span>
                            <br/>
                            with Ease!</h1>
                        <p>CryptoLAB provides great crypto trading<br/>experience with full transparency.
                        </p>
                        <div className={styles.cryptoPriceBoxList}>
                            <CryptoPriceBox image='./img/btc.png' crypto='BTC / USDT' price={19000}></CryptoPriceBox>
                            <CryptoPriceBox image='./img/eth.png' crypto='ETH / USDT' price={19000}></CryptoPriceBox>
                            <CryptoPriceBox image='./img/bnb.png' crypto='BNB / USDT' price={19000}></CryptoPriceBox>
                        </div>
                        <BlueBtn link='' text='Explore Now!'></BlueBtn>
                    </div>
                    <div className={styles.rightCol}>
                        <img src="./img/hero-illustration.png" alt=""/>
                    </div>
                </div>

            </div>
            <footer className={styles.footer}></footer>
        </div>
    )
}
