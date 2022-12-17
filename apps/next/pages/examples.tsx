import { useAccount } from 'wagmi'
import dynamic from 'next/dynamic'
import { Seo } from '@/components/Seo'

const DynamicComponent = dynamic(() => import('../components/example/DynamicComponent'), {
  ssr: false,
})

function Examples() {
  const { address } = useAccount()

  return (
    <section className="max-w-[1240px] m-auto px-4 gap-8 flex flex-col">
      <Seo title="examples" />
      <h1>Connect your wallet to see the magic 🪄</h1>
      {address ? <DynamicComponent address={address} /> : null}
    </section>
  )
}

export default Examples
