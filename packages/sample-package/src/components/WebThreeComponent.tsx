import * as React from 'react'
import { useAccount } from 'wagmi'
import { useOwnedTokens } from '../hooks'

type WebThreeComponentProps = {
	text?: string
	address: `0x${string}`
}

export function WebThreeComponent(props: WebThreeComponentProps) {
	const { address } = useAccount()

	const { balanceOf, balanceOfError } = useOwnedTokens(props.address)

	return (
		<div className="flex flex-col gap-1 rounded-xl border border-solid border-gray-200 p-4">
			{props.text && <span>{props.text}</span>}
			<span>{address ? address : 'Connect your wallet'}</span>
			<pre className="py-[10px] overflow-x-scroll">
				{balanceOf ? (
					<code>{JSON.stringify({ balanceOf }, null, 2)}</code>
				) : (
					<code>{JSON.stringify({ balanceOfError }, null, 2)}</code>
				)}
			</pre>
		</div>
	)
}
