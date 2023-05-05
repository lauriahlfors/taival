import './globals.css'

export const metadata = {
  title: 'Taival',
  description: 'A travel planning app!',
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
