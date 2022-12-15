import dynamic from 'next/dynamic'
import { Navigation } from './Navigation'

const ConnectButton = dynamic(() => import('./ConnectButton'), {
  ssr: false,
})

export function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between px-4 lg:sticky lg:top-0">
      <Navigation />
      <ConnectButton />
    </header>
  )
}
