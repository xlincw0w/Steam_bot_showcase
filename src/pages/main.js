import React from 'react'
import Header from './../components/header/header'
import Section from './../components/section/section'
import Info from './../components/info/info'

/**
 * @author
 * @function Main
 **/

const Main = (props) => {
    return (
        <div className='main'>
            <Header></Header>
            <Section></Section>
            <Info></Info>
        </div>
    )
}

export default Main
