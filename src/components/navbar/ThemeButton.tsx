import { useEffect, useState } from 'react'
import Button from '../Button'

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark')
      localStorage.setItem('vidyaDarkMode', 'true')
    } else {
      window.document.documentElement.classList.remove('dark')
      localStorage.setItem('vidyaDarkMode', 'false')
    }
  }, [darkMode])
  const onClick = () => {
    setDarkMode(!darkMode)
  }

  return <Button onClick={onClick}>toggle dark mode</Button>
}
