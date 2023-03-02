import './globals.css'

export const metadata = {
  title: 'hatland.dev',
  description: 'My web dev learning journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
