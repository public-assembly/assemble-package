import { useAccount } from 'wagmi'

export type WebThreeComponentProps = {
  /**
   * text: send in an optional string and it will render above the wallet address
   */
  text?: string
}

export function WebThreeComponent({text}: WebThreeComponentProps) {
  const {
    address
  } = useAccount()
  
  return (
    <div className="flex flex-col border border-solid border-gray-200 p-4 rounded-xl gap-1">
      {text && <span>{text}</span>}
      <span>{address ? address : 'connect your wallet'}</span>
    </div>
  )
}
