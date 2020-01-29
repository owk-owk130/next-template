import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../store/counter'

const About = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const countIncrement = () => {
        dispatch(increment())
    }
    const countDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Nav/>
            <p>{counter}</p>
            <button onClick={countIncrement}>+1</button>
            <button onClick={countDecrement}>-1</button>
        </div>
    )
}

export default About