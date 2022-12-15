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
        <Link passHref href={page.slug} key={page.slug}>
          <a
            style={{
              color: router.asPath === page.slug ? '#ff89de' : '#ffffff',
            }}>
            {page.title}
          </a>
        </Link>
      ))}
    </div>
  )
}
