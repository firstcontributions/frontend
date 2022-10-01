import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  color?: 'primary' | 'secondary' | 'transparent'
  variant?: 'contained' | 'outlined' | 'text'
}

const Button = ({
  children,
  onClick,
  color = 'primary',
  variant = 'contained',
}: ButtonProps) => {
  const getColorStyles = (color: string) => {
    if (color === 'primary') {
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    }
    if (color === 'transparent') {
      return 'focus:ring-transparent'
    }
    return ''
  }
  return (
    <button
      type="button"
      className={` focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${getColorStyles(
        color
      )}  `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
