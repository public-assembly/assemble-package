import { useOwnedTokens } from "react-web3-package"
import { RawDisplayer } from "../RawDisplayer"

export function ExampleHook({address}: {address: string}) {
  const { tokens } = useOwnedTokens({address: address})
  return (
    <RawDisplayer data={{ address, tokens }} />
  )
}