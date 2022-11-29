import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { AppWrapper } from '../components'

function ExampleApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>public assembly</title>
      </NextHead>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  )
}
export default ExampleApp
