import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full px-4 border-b border-gray-200 border-dashed">
      <span className="text-2xl">Header</span>
      <ConnectButton />
    </header>
  )
}
