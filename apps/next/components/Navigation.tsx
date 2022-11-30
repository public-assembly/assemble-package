import Link from 'next/link'
import { useRouter } from 'next/router'

const pages = [
  {
    slug: '/',
    title: 'Docs',
  },
  {
    slug: '/examples',
    title: 'Examples',
  },
]

export function Navigation() {
  const router = useRouter()

  return (
    <div className="flex flex-row gap-4">
      {pages.map((page) => (
        <Link
          href={page.slug}
          key={page.slug}
          style={{
            color: router.asPath === page.slug ? 'red' : 'black',
          }}>
          {page.title}
        </Link>
      ))}
    </div>
  )
}
