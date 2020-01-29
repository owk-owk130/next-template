import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../store/counter'

const About = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    console.log(increment())
    console.log()

    return (
        <div>
            <Head>
                <title>About</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Nav/>
            <p>{counter}</p>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
        </div>
    )
}

export default About