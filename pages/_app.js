import '../styles/index.sass'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import App from 'next/app'
import { init } from "@socialgouv/matomo-next"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    )
  }
}

export default MyApp
