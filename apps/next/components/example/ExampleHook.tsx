import { useOwnedTokens } from 'sample-package'
import { RawDisplayer } from '../RawDisplayer'

export default function ExampleHook({ address }: { address: string }) {
  const { tokens } = useOwnedTokens({ address: address })
  return <RawDisplayer data={{ address, tokens }} />
}
