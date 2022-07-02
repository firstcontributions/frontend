import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button'
const ThemeButton = dynamic(() => import('./ThemeButton'), {
  ssr: false,
})

export default function Navbar() {
  const router = useRouter()
  const { pathname } = router
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full h-16 bg-white dark:bg-dark-700 p-3 shadow-sm">
      <div className="container m-auto flex justify-between">
        <Link href="/">
          <a>
            <div className="logo w-10 h-10"></div>
          </a>
        </Link>
        <div className="space-x-4">
          <ThemeButton />
          {pathname !== '/story' && (
            <Button>
              <Link href="/story">
                <a>Create Post</a>
              </Link>
            </Button>
          )}
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
