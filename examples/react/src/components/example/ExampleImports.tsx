import { TestComponent } from 'react-package'
import { WebThreeComponent } from 'react-web3-package'
import { ExampleHook } from './ExampleHook';
import { useAccount } from 'wagmi';

export function ExampleImports() {
  const { address } = useAccount()
  
  return (
    <section className="flex flex-col gap-4">
      <TestComponent text=" Imported into a vanilla react parcel app" />
      <WebThreeComponent />
      {address && <ExampleHook address={address} />}
    </section>
  )
}