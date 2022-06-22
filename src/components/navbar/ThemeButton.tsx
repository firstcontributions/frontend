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

  return <Button onClick={onClick}>toggle dark mode</Button>
}
