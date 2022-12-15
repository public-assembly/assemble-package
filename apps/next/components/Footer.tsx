import { links } from 'utils/links'

export function Footer() {
  return (
    <footer className="flex w-full flex-row items-center justify-between px-4 border-t-[1px] border-white gap-x-10 flex-wrap">
      {links.map((link) => (
        <a
          className="text-underline"
          href={link.url}
          target="_blank"
          rel="noreferrer"
          key={link.url}>
          <span>{link.platform}</span>
        </a>
      ))}
      <div className="w-[60px] h-[60px] relative">
        <img src="favicon.png"></img>
      </div>
    </footer>
  )
}
