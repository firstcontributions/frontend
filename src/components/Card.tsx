import { ReactNode } from 'react'

export default function Card({
  children,
  classes,
}: {
  children: ReactNode
  classes?: string
}) {
  return (
    <div
      className={`py-4 px-8 bg-white dark:bg-dark-700 rounded-lg ${classes}`}
    >
      {children}
    </div>
  )
}
