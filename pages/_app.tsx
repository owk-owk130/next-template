import App from 'next/app'
import React from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { setupStore } from "../store/"

interface Props {
    reduxStore: Store;
}

const store = setupStore()

class MyApp extends App<Props> {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default MyApp
