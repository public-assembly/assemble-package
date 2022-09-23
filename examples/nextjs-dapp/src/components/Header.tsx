import { ConnectButton } from './ConnectButton'

export function Header() {
  return (
    <header className="flex w-full flex-row items-center justify-between border-b border-dashed border-gray-200 px-4">
      <span className="text-2xl">Header</span>
      <ConnectButton />
    </header>
  )
}
