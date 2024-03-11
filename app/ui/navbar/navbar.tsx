'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

const links = [
  { name: 'Movies', href: '/movies', icon: ''},
  {
    name: 'Theaters', href: '/theaters', icon: ''
  },
  { name: 'Concessions', href: '/concessions', icon: ''}
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 left-0 my-2">
      <div className="container mx-auto flex">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <ul className="flex justify-around grow">
          {links.map((link) => {
            return (
              <Link
                href={`${link.href}`}
                key={link.name}
                className={clsx(
                  'grow items-center justify-center gap-2 rounded-md p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  },
                )}>
                <li>{link.name}</li>
              </Link>
            )
          })}
        <input className='rounded-md' />
        <Link href={`/account`} key={10} className={clsx(
          'grow items-center justify-center gap-2 rounded-md p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {'bg-sky-100 text-blue-600': pathname === '/account'})}>
            <li>Account</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}