import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Avatar } from './Avatar'

export function ConnectButton({ ...props }) {
  return (
    <div
      className="connect-button-wrapper relative flex items-center px-4 py-1.5 rounded-2xl bg-slate-100 overflow-hidden"
      {...props}
    >
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <>
              {(() => {
                if (!mounted || !account || !chain) {
                  return <button className="text-sm" onClick={openConnectModal}>Connect Wallet</button>
                }
                return (
                  <button onClick={openAccountModal}>
                    <div className="flex items-center gap-2">
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
