import 'src/styles/globals.css'
import 'src/styles/editor.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head />
      <body>{children}</body>
    </html>
  )
}
