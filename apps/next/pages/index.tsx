import { useAccount } from 'wagmi'
import Docs from './../../../README.md'

function Home() {
  const { address } = useAccount()

  return (
    <section className="flex flex-col gap-4">
      <Docs />
    </section>
  )
}

export default Home
