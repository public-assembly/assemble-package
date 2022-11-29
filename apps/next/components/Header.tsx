import dynamic from 'next/dynamic'
import { Navigation } from './Navigation'

const ConnectButton = dynamic(() => import('./ConnectButton'), {
  ssr: false,
})

export function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-dashed border-gray-200 px-4">
      <Navigation />
      <ConnectButton />
    </header>
  )
}
