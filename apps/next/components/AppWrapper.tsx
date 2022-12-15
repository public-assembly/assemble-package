import '@rainbow-me/rainbowkit/styles.css'
import NextNProgress from 'nextjs-progressbar'
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import { createClient, chain, configureChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { SWRConfig } from 'swr'
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'
import { Header } from './Header'
import { Footer } from './Footer'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [
    jsonRpcProvider({
      priority: 0,
      rpc: (chain) =>
        chain.id === 1
          ? { http: 'https://rpc.ankr.com/eth' }
          : { http: 'https://rpc.ankr.com/eth_goerli' },
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Public Assembly',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export const strategy = new ZDKFetchStrategy('1', 'https://api.zora.co/graphql')

export function AppWrapper({ children }: { children: JSX.Element }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        theme={lightTheme({
          accentColor: 'black',
          borderRadius: 'large',
        })}>
        <NFTFetchConfiguration networkId="1" strategy={strategy}>
          <SWRConfig
            value={{
              fetcher: (resource, init) =>
                fetch(resource, init).then((res) => res.json()),
            }}>
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
        </NFTFetchConfiguration>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
