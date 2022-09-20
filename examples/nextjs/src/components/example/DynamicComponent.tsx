import { WebThreeComponent } from 'react-web3-package'
import { ExampleHook } from './ExampleHook'

export function DynamicComponent({ address }: { address?: string }) {
  return (
    <>
      <WebThreeComponent text="An example module import using wagmi and ethers as a peer dependency" />
      {address && <ExampleHook address={address} />}
    </>
  )
}