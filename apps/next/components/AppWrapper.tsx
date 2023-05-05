import NextNProgress from 'nextjs-progressbar'
import { ConnectKitProvider } from 'connectkit'
import { SWRConfig } from 'swr'
import { Header } from './Header'
import { Footer } from './Footer'
import { getDefaultClient } from 'connectkit'
import { createClient, configureChains, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY

const { provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: alchemyKey as string }), publicProvider()],
)

const client = createClient(
  getDefaultClient({
    appName: 'Sample App',
    autoConnect: true,
    provider,
  }),
)

export function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <NextNProgress
            color="#cdf15e"
            startPosition={0.125}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          {/* <Header /> */}
          {children}
          <Footer />
        </SWRConfig>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
