import { Header } from './Header'

export function PageWrapper({ children, ...props }: {children?: JSX.Element}) {
  return (
    <>
      <Header />
      <main {...props} className="p-4">
        {children}
      </main>
    </>
  )
}
