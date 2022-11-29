import {
  useAccount,
  useDisconnect,
  useNetwork,
  useProvider,
  useSigner,
  useBalance,
  useEnsName,
  useEnsAvatar,
} from 'wagmi'
import { shortenAddress } from '../utils/shortenAddress'

export function useAuth() {
  const provider = useProvider()

  const { data: signer } = useSigner()
  const { address, isConnecting } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
  })
  const { data: ensAvatar } = useEnsAvatar({
    addressOrName: address,
  })
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()
  const { data: balance } = useBalance({ addressOrName: address })

  return {
    provider,
    signer,
    address: address,
    ensName: ensName || shortenAddress(address),
    ensAvatar: ensAvatar,
    displayName: ensName || shortenAddress(address),
    balance: balance,
    loading: isConnecting,
    logout: disconnect,
    chain,
  }
}
