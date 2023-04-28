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
          <p
            className="sm-font"
            style={{
              color: router.asPath === page.slug ? '#ff89de' : '#ff89de',
            }}
          >
            {page.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
