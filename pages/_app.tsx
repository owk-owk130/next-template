import App from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from "../store/"

const store = setupStore()

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default MyApp
