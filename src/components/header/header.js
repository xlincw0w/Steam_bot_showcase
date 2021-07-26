import React, { useRef } from 'react'
import { ReactComponent as Bitcoin } from '../../assets/bitcoin.svg'

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
    let anchor = useRef()
    const handleclick = () => {
        anchor.current.scrollIntoView({
            behavior: 'smooth',
            transition: 'ease-out',
        })
    }
    return (
        <section className='header'>
            <nav>
                <div className='logo'>Hachi</div>
            </nav>
            <div className='details'>
                <h1>HachiBot, Welcomes you</h1>
                <h2>The best trading bot on steam</h2>
                <p>
                    Buy/sell <b>TF keys</b> with <b>Bitcoin</b>, <b>Ethereum</b>, <b>Litcoin</b>, <b>Dogecoin</b>, <b>Bitcoin cash</b>, <b>Cardano</b>, <b>Polkadot</b>, <b>USD</b>,
                    it is easy, safe and reliable !
                </p>
                <button>Add friends</button>
            </div>
            <div className='image'>
                <Bitcoin />
            </div>
            <span onClick={() => handleclick()} className='scroll'>
                Scroll down
            </span>

            <span ref={anchor} className='ref'></span>
        </section>
    )
}

export default Header
