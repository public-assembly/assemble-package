import { useAccount } from 'wagmi'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('../components/example/DynamicComponent'),
  {
    ssr: false,
  },
)

function Examples() {
  const { address } = useAccount()

  return (
    <section className="max-w-[1240px] m-auto px-4 gap-8 flex flex-col h-screen">
      {address ? <DynamicComponent address={address} /> : null}
    </section>
  )
}

export default Examples
