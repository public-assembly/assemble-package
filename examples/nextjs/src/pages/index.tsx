import { TestComponent } from 'react-package'
import { useAccount } from 'wagmi'
import { DynamicComponent } from './../components/example/DynamicComponent'

function Page() {
  const { address } = useAccount()
  
  return (
    <section className="flex flex-col gap-4">
      <TestComponent />
      {address ? <DynamicComponent address={address} /> : null}
    </section>
  )
}

export default Page