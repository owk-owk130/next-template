import React from "react";
import Head from "next/head";
import {Meta} from "../config/meta"

const DefaultLayout = ({children}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>{Meta.title}</title>
        <meta name="description" content={Meta.description}/>
        <meta property="og:url" content={Meta.url} />
        <meta property="og:image" content={Meta.image} />
        <meta property="og:title" content={Meta.title} />
        <meta property="og:description" content={Meta.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={Meta.image} />
        <meta property="twitter:title" content={Meta.title} />
        <meta property="twitter:description" content={Meta.description} />
        <link rel="canonical" href={Meta.url} />
      </Head>
      {children}
    </>
  )
}

export default DefaultLayout
