import { useState } from 'react'

type HamburgerMenuProps = {
  className?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const HamburgerMenu = ({
  className = '',
  isOpen,
  setIsOpen,
}: HamburgerMenuProps) => {
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`

  return (
    <button
      className={`flex flex-col h-10 w-10 rounded justify-center items-center group ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  )
}

export default HamburgerMenu
