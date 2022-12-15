import * as React from 'react'
import { useAccount } from 'wagmi'

export function WebThreeComponent({ text }: { text?: string }) {
  const { address } = useAccount()

  React.useEffect(() => {
    console.log(address)
  }, [address])

  return (
    <div className="flex flex-col gap-1 rounded-xl border border-solid border-gray-200 p-4">
      {text && <span>{text}</span>}
      <span>{address ? address : 'connect your wallet'}</span>
    </div>
  )
}
