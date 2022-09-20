import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import { createClient, chain, configureChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { SWRConfig } from 'swr'
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'

const { chains, provider } = configureChains([chain.mainnet], [publicProvider()])
const { connectors } = getDefaultWallets({
  appName: 'ExampleNextjsDapp',
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
              fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
            }}>
            {children}
          </SWRConfig>
        </NFTFetchConfiguration>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
