import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Button from '../Button'
import HamburgerMenu from './HamburgerButton'
const ThemeButton = dynamic(() => import('./ThemeButton'), {
  ssr: false,
})

type NavbarProps = {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isOpen: boolean) => void
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const pathname = usePathname()
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full h-16 bg-white dark:bg-dark-700 p-3 shadow-sm">
      <div className="container m-auto flex justify-between">
        <Link href="/">
          <div className="logo w-10 h-10"></div>
        </Link>
        <div className="space-x-4 flex">
          <ThemeButton />
          {pathname !== '/story' && (
            <Button>
              <Link href="/story">Create Post</Link>
            </Button>
          )}
          <HamburgerMenu
            className="lg:hidden"
            isOpen={isDrawerOpen}
            setIsOpen={setIsDrawerOpen}
          />
        </div>
      </div>
      <style jsx>{`
        .logo {
          background: url('https://avatars1.githubusercontent.com/u/65761570?s=460&u=640f39b808c75c6b86460aa907dd030bcca2f3c7&v=4');
          background-repeat: no-repeat;
          background-size: contain;
          @apply: border;
        }
      `}</style>
    </nav>
  )
}
