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
      className={` ${classes || ''} p-4 bg-white dark:bg-dark-700 rounded-md`}
    >
      {children}
    </div>
  )
}
