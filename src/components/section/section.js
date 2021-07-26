import React, { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * @author
 * @function section
 **/

const Section = (props) => {
    const [data, SetData] = useState(null)
    const [sellBtc, setSellBtc] = useState(null)
    const [sellEther, setSellEther] = useState(null)
    const [sellLit, setSellLit] = useState(null)
    const [sellDoge, setSellDoge] = useState(null)
    const [sellBtcCash, setSellBtcCash] = useState(null)
    const [buyBtc, setBuyBtc] = useState(null)
    const [buyEther, setBuyEther] = useState(null)
    const [buyLit, setBuyLit] = useState(null)
    const [buyDoge, setBuyDoge] = useState(null)
    const [buyBtcCash, setBuyBtcCash] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            await axios
                .get('https://api.alternative.me/v2/ticker/')
                .then((res) => {
                    let myMap = new Map(Object.entries(res.data.data))
                    console.log(myMap)
                    let data = []
                    for (const value of myMap.values()) {
                        data.push(value)
                    }
                    SetData(data)
                    console.log('fetching')
                })
                .catch((e) => {
                    console.log(e)
                })
        }
        fetch()
    }, [])
    useEffect(() => {
        const fetch = async () => {
            await axios
                .get('https://api.alternative.me/v2/ticker/')
                .then((res) => {
                    let myMap = new Map(Object.entries(res.data.data))
                    console.log(myMap)
                    let data = []
                    for (const value of myMap.values()) {
                        data.push(value)
                    }
                    SetData(data)
                    console.log('fetching')
                })
                .catch((e) => {
                    console.log(e)
                })
        }

        const timer = setInterval(() => {
            fetch()
        }, 1000000)
    }, [])
    const handleChangeSell = async (amount) => {
        const key = await axios.get('https://hachi-client-bot.herokuapp.com/keyprice', (res) => {
            return res.data
        })
        console.log(key.data)

        setSellBtc((key.data.KEY_PRICE_SELL * amount) / data[0].quotes.USD.price)
        setSellEther((key.data.KEY_PRICE_SELL * amount) / data[11].quotes.USD.price)
        setSellDoge((key.data.KEY_PRICE_SELL * amount) / data[3].quotes.USD.price)
        setSellLit((key.data.KEY_PRICE_SELL * amount) / data[2].quotes.USD.price)
        setSellBtcCash((key.data.KEY_PRICE_SELL * amount) / data[32].quotes.USD.price)
    }
    const handleChangeBuy = async (amount) => {
        const key = await axios.get('https://hachi-client-bot.herokuapp.com/keyprice', (res) => {
            return res.data
        })
        setBuyBtc((key.data.KEY_PRICE_BUY * amount) / data[0].quotes.USD.price)
        setBuyEther((key.data.KEY_PRICE_BUY * amount) / data[11].quotes.USD.price)
        setBuyDoge((key.data.KEY_PRICE_BUY * amount) / data[3].quotes.USD.price)
        setBuyLit((key.data.KEY_PRICE_BUY * amount) / data[2].quotes.USD.price)
        setBuyBtcCash((key.data.KEY_PRICE_BUY * amount) / data[32].quotes.USD.price)
    }
    return (
        <section className='section'>
            <div className='title'>
                <h1>Key Stocks</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='rates'>
                        <div className='coins-container'>
                            <h4 className='coins'>BTC</h4>
                            <h4 className='coins'>ETH</h4>
                            <h4 className='coins'>DOGE</h4>
                            <h4 className='coins'> ADA</h4>
                            <h4 className='coins'>DOT</h4>
                        </div>
                        <div className='prices-container'>
                            {data ? (
                                <>
                                    <h4> {sellBtc ? sellBtc.toFixed(8) : (1 / data[0].quotes.USD.price).toFixed(8)}</h4>
                                    <h4>{sellEther ? sellEther.toFixed(8) : (1 / data[11].quotes.USD.price).toFixed(8)}</h4>
                                    <h4> {sellDoge ? sellDoge.toFixed(8) : (1 / data[3].quotes.USD.price).toFixed(8)}</h4>
                                    <h4> {sellLit ? sellLit.toFixed(8) : (1 / data[2].quotes.USD.price).toFixed(8)}</h4>
                                    <h4>{sellBtcCash ? sellBtcCash.toFixed(8) : (1 / data[32].quotes.USD.price).toFixed(8)}</h4>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className='head'>
                        <h3>
                            If you sell <input onChange={(e) => handleChangeSell(e.target.value)} type='number' /> {''}$
                        </h3>
                    </div>
                    <button>How to sell</button>
                </div>
                <div className='card'>
                    <div className='rates'>
                        <div className='coins-container'>
                            <h4 className='coins'>BTC</h4>
                            <h4 className='coins'>ETH</h4>
                            <h4 className='coins'>DOGE</h4>
                            <h4 className='coins'> ADA</h4>
                            <h4 className='coins'>DOT</h4>
                        </div>
                        <div className='prices-container'>
                            <h4>0.0551110000000000</h4>
                            <h4>0.0551110000000000</h4>
                            <h4>0.0551110000000000</h4>
                            <h4>0.0551110000000000</h4>
                            <h4>0.0551110000000000</h4>
                        </div>
                    </div>
                    <div className='head'>
                        <h3>Crypto withdrawal fees</h3>
                    </div>
                    <button>How to withdrawal</button>
                </div>
                <div className='card'>
                    <div className='rates'>
                        <div className='coins-container'>
                            <h4 className='coins'>BTC</h4>
                            <h4 className='coins'>ETH</h4>
                            <h4 className='coins'>DOGE</h4>
                            <h4 className='coins'> ADA</h4>
                            <h4 className='coins'>DOT</h4>
                        </div>
                        <buy className='prices-container'>
                            {data ? (
                                <>
                                    <h4> {buyBtc ? buyBtc.toFixed(8) : (1 / data[0].quotes.USD.price).toFixed(8)}</h4>
                                    <h4>{buyEther ? buyEther.toFixed(8) : (1 / data[11].quotes.USD.price).toFixed(8)}</h4>
                                    <h4> {buyDoge ? buyDoge.toFixed(8) : (1 / data[3].quotes.USD.price).toFixed(8)}</h4>
                                    <h4> {buyLit ? buyLit.toFixed(8) : (1 / data[2].quotes.USD.price).toFixed(8)}</h4>
                                    <h4>{buyBtcCash ? buyBtcCash.toFixed(8) : (1 / data[32].quotes.USD.price).toFixed(8)}</h4>
                                </>
                            ) : null}
                        </buy>
                    </div>
                    <div className='head'>
                        <h3>
                            If you buy <input type='number' onChange={(e) => handleChangeBuy(e.target.value)} />
                        </h3>
                    </div>

                    <button>How to buy</button>
                </div>
            </div>
        </section>
    )
}

export default Section
