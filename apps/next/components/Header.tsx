import { Navigation } from './Navigation'
import { ConnectKitButton } from 'connectkit'

export function Header() {
	return (
		<header className="flex w-full flex-row items-center justify-between px-4 lg:sticky lg:top-0">
			<Navigation />
			<ConnectKitButton />
		</header>
	)
}
