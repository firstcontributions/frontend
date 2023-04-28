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
      className={` ${
        classes || ''
      } rounded-lg shadow-lg hover:shadow-md bg-white dark:bg-dark-700`}
    >
      {children}
    </div>
  )
}
