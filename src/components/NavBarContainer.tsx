import Link from 'next/link'

type LinkItem = { title: string; href: string }

export default function NavBarContainer({title, links, children}: {title: string; links: LinkItem[]; children: React.ReactNode}) {
  return (
      <div className={'w-full bg-base-200'}>
        <header className={'max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'}>
          <h1 className={'text-xl font-semibold'}>{title}</h1>
          <nav>
            <ul className={'flex gap-4'}>
              {links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.title}</Link>
                  </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className={'max-w-6xl mx-auto w-full'}>
          {children}
        </div>
      </div>
  )
}
