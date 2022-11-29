import { useOwnedTokens } from 'react-web3-package'
import { RawDisplayer } from '../RawDisplayer'

export default function ExampleHook({ address }: { address: string }) {
  const { tokens } = useOwnedTokens({ address: address })
  return <RawDisplayer data={{ address, tokens }} />
}
