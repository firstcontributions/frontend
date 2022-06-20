import { useRouter } from 'next/router'
import React from 'react'
import Button from '../Button'

export default function Navbar() {
  const router = useRouter()
  const { pathname } = router
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 w-full h-16 bg-white p-3 shadow-sm">
      <div className="container m-auto flex justify-between">
        <a href="/">
          <div className="logo w-10 h-10"></div>
        </a>
        {pathname !== '/story' && (
          <Button>
            <a href="/story">
              <a>Create Post </a>
            </a>
          </Button>
        )}
      </div>
      <style jsx>{`
        .logo {
          background: url('https://avatars1.githubusercontent.com/u/65761570?s=460&u=640f39b808c75c6b86460aa907dd030bcca2f3c7&v=4');
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </nav>
  )
}
