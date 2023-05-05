import Link from 'next/link'
import { useRouter } from 'next/router'

const pages = [
  {
    slug: '/',
    title: 'assemble package',
  },
  // {
  //   slug: "/examples",
  //   title: "examples",
  // },
]

export function Navigation() {
  const router = useRouter()

  return (
    <div className="flex gap-x-8">
      {pages.map((page) => (
        <Link passHref href={page.slug} key={page.slug}>
          <p
            className={`font-sans text-xl text-white ${
              router.asPath === page.slug ? 'text-maximum-green-yellow ' : null
            }`}
          >
            {page.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
