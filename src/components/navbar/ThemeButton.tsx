import { useEffect, useState } from 'react'
import Button from '../Button'

export default function ThemeButton() {
  const darkModePreference =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [darkMode, setDarkMode] = useState(darkModePreference)
  darkModePreference && window.document.documentElement.classList.add('dark')
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('preferenceDarkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('preferenceDarkMode', 'false')
    }
  }, [darkMode])
  const onClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <Button onClick={onClick} color="transparent">
      {darkMode ? (
        <svg
          id="day"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          style={{ fill: '#fff' }}
        >
          <path d="M18.1 5.1c0 .3-.1.6-.3.9l-1.4 1.4-.9-.8 2.2-2.2c.3.1.4.4.4.7zm-.5 5.3h3.2c0 .3-.1.6-.4.9s-.5.4-.8.4h-2v-1.3zm-6.2-5V2.2c.3 0 .6.1.9.4s.4.5.4.8v2h-1.3zm6.4 11.7c-.3 0-.6-.1-.8-.3l-1.4-1.4.8-.8 2.2 2.2c-.2.2-.5.3-.8.3zM6.2 4.9c.3 0 .6.1.8.3l1.4 1.4-.8.9-2.2-2.3c.2-.2.5-.3.8-.3zm5.2 11.7h1.2v3.2c-.3 0-.6-.1-.9-.4s-.4-.5-.4-.8l.1-2zm-7-6.2h2v1.2H3.2c0-.3.1-.6.4-.9s.5-.3.8-.3zM6.2 16l1.4-1.4.8.8-2.2 2.2c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8z" />
          <circle cx="12" cy="11" r="4" />
        </svg>
      ) : (
        <svg
          id="night"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.1 17.5c-3.3 1.4-7.1-.2-8.5-3.5-1.4-3.3.2-7.1 3.5-8.5.2-.1.5-.2.7-.3-1.6-.4-3.2-.3-4.8.4C6 7.3 4 12 5.7 16c1.7 4.1 6.4 6 10.5 4.3 1.7-.7 3-1.9 3.8-3.4-.3.3-.6.4-.9.6z"
            fill="#444;"
          />
        </svg>
      )}
    </Button>
  )
}
