import { WebThreeComponent } from 'sample-package'
import ExampleHook from './ExampleHook'

export default function DynamicComponent({ address }: { address?: string }) {
  return (
    <>
      <WebThreeComponent />
      {address && <ExampleHook address={address} />}
    </>
  )
}
