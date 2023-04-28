import NextNProgress from 'nextjs-progressbar'
import { ConnectKitProvider } from 'connectkit'
import { SWRConfig } from 'swr'
import { Header } from './Header'
import { Footer } from './Footer'
import { getDefaultClient } from 'connectkit'
import { createClient, configureChains, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY

const { provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: alchemyKey as string }),
    infuraProvider({ apiKey: infuraKey as string }),
    publicProvider(),
  ],
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
      <ConnectKitProvider theme="minimal">
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <NextNProgress
            color="#ff89de"
            startPosition={0.125}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />
          <Header />
          <main>{children}</main>
          <Footer />
        </SWRConfig>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
