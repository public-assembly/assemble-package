import { useOwnedTokens } from 'sample-package'

export default function ExampleHook({ address }: { address: string }) {
  const { tokens } = useOwnedTokens({ address: address })
  return (
    <pre className="py-[10px] overflow-x-scroll">
      <code>{JSON.stringify({ address, tokens }, null, 2)}</code>
    </pre>
  )
}
