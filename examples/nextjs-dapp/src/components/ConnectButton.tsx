import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Avatar } from './Avatar'

export function ConnectButton({ ...props }) {
  return (
    <div
      className="connect-button-wrapper relative flex items-center pr-3 pl-3 py-1.5 rounded-2xl bg-slate-100 overflow-hidden"
      {...props}
    >
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <>
              {(() => {
                if (!mounted || !account || !chain) {
                  return <button onClick={openConnectModal} className="text-sm">Connect Wallet</button>
                }
                if (chain.unsupported) {
                  return <div className="text-red-400 text-sm">&#x26A0; Wrong Network</div>
                }
                return (
                  <button onClick={openAccountModal}>
                    <div className="flex items-center gap-2 text-sm">
                      <Avatar />
                      {account.displayName}
                    </div>
                  </button>
                )
              })()}
            </>
          )
        }}
      </RKConnectButton.Custom>
    </div>
  )
}
