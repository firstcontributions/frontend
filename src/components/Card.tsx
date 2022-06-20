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
      className={`py-4 px-8 bg-white dark:bg-slate-800 rounded-lg ${classes}`}
    >
      {children}
    </div>
  )
}
