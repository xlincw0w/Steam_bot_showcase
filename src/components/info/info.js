import React from 'react'
import { ReactComponent as Buy } from '../../assets/buy.svg'
import { ReactComponent as Sell } from '../../assets/sell.svg'

/**
 * @author
 * @function Info
 **/

const Info = (props) => {
    return (
        <section className='info'>
            <div className='row'>
                <div className='card'>
                    <h1>How to buy</h1>
                    <h4>Check how much key price with !buycost key amount [cryptocurrency]</h4>
                    <h4>
                        Send any amount of your crypto to our bot by <b>!deposit</b> cryptocurrency
                    </h4>
                    <h4>Check how many keys you can buy with !balance</h4>
                    <h4>
                        Use <b>!buy</b> keys cryptocurrency ex : !buy 200 BTC
                    </h4>
                </div>
                <div className='image'>
                    <Buy />
                </div>
            </div>
            <div className='row'>
                <div className=' image image-margin'>
                    <Sell />
                </div>
                <div className='card'>
                    <h1>How to sell</h1>
                    <h4>Check how much key price with !buycost key amount [cryptocurrency]</h4>
                    <h4>
                        Send any amount of your crypto to our bot by <b>!deposit</b> cryptocurrency
                    </h4>
                    <h4>Check how many keys you can buy with !balance</h4>
                    <h4>
                        Use <b>!buy</b> keys cryptocurrency ex : !buy 200 BTC
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Info
