import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import BlueBtn from '../components/BlueBtn/BlueBtn'
import CryptoPriceBox from '../components/CryptoPriceBox/CryptoPriceBox'
import Navbar from '../components/Navbar/Navbar'
import ProvideInfoBox from '../components/ProvideInfoBox/ProvideInfoBox'
import styles from './Home.module.scss'


export default function Home() {

    const [cryptoPrice,
        setCryptoPrice] : any = useState(null)
        
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCryptoPrice(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    if (!cryptoPrice) return <h1>Loading ...</h1>
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
                            <CryptoPriceBox image='./img/btc.png' crypto='BTC / USDT' price={cryptoPrice[0].current_price} change={cryptoPrice[0].price_change_percentage_24h}></CryptoPriceBox>
                            <CryptoPriceBox image='./img/eth.png' crypto='ETH / USDT' price={cryptoPrice[1].current_price} change={cryptoPrice[1].price_change_percentage_24h}></CryptoPriceBox>
                            <CryptoPriceBox image='./img/bnb.png' crypto='BNB / USDT' price={cryptoPrice[2].current_price} change={cryptoPrice[2].price_change_percentage_24h}></CryptoPriceBox>
                        </div>
                        <BlueBtn link='' text='Explore Now!'></BlueBtn>
                    </div>
                    <div className={styles.rightCol}>
                        <img src="./img/hero-illustration.png" alt=""/>
                    </div>
                </div>

            </div>
            <div className={styles.provide}>
                <img src="../img/provide-bg.svg" className={styles.provideBackground}/>
                <div className={styles.provideContent}>
                    <div className={styles.title}>
                        <h2>What Do We
                            <span>
                                Provide</span>?</h2>
                        <p>here are our unique feature</p>
                    </div>
                    <div className={styles.provideInfoBoxList}>
                        <ProvideInfoBox
                            icon='lightning'
                            highlightedTitle='LIGHTNING FAST'
                            title='TRANSACTION'
                            desc='CryptoLAB provides the fastestcryptocurrencies to facillitate perfect timed trading.  '></ProvideInfoBox>
                        <ProvideInfoBox
                            icon='userFriendly'
                            highlightedTitle='USER FRIENDLY'
                            title='INTERFACE'
                            desc='CryptoLAB provides the fastestcryptocurrencies to facillitate perfect timed trading.  '></ProvideInfoBox>
                        <ProvideInfoBox
                            icon='security'
                            highlightedTitle='HIGH SECURITY'
                            title='TRADING'
                            desc='CryptoLAB provides the fastestcryptocurrencies to facillitate perfect timed trading.  '></ProvideInfoBox>
                    </div>
                </div>
            </div>
            <div className={styles.decentralized}></div>
            <footer className={styles.footer}></footer>
        </div>
    )
}
