import { useAccount } from 'wagmi'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/Seo'

const DynamicComponent = dynamic(() => import('../components/example/DynamicComponent'), {
  ssr: false,
})

function Examples() {
  const { address } = useAccount()

  return (
    <section>
      <Seo title="Example Components" />
      <h1>Connect your wallet to see the magic 🪄</h1>
      {address ? <DynamicComponent address={address} /> : null}
    </section>
  )
}

export default Examples
