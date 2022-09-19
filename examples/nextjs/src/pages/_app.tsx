import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>public assembly</title>
      </NextHead>
      <Component {...pageProps} />
    </>
  )
}

export default App