import { useAccount } from 'wagmi'
import dynamic from 'next/dynamic'
import Example from './../../../README.md'

const DynamicComponent = dynamic(() => import('../components/example/DynamicComponent'), {
  ssr: false,
})

function Examples() {
  const { address } = useAccount()

  return (
    <section className="flex flex-col gap-4">
      {address ? <DynamicComponent address={address} /> : null}
    </section>
  )
}

export default Examples
