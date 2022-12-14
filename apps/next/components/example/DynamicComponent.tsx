import { WebThreeComponent } from 'sample-package'
import ExampleHook from './ExampleHook'

export default function DynamicComponent({ address }: { address?: string }) {
  return (
    <>
      <WebThreeComponent text="An example module import using wagmi and ethers as a peer dependency" />
      {address && <ExampleHook address={address} />}
    </>
  )
}
