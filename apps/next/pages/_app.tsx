import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { AppWrapper } from '../components'
import { IBM_Plex_Mono } from 'next/font/google'

const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-ibm-plex-mono',
})

function ExampleApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ibm_plex_mono.variable}`}>
      <NextHead>
        <title>Public Assembly</title>
      </NextHead>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </div>
  )
}
export default ExampleApp
