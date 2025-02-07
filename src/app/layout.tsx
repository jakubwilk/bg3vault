import { Barlow } from 'next/font/google'
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'
import { Header, MobileFixedNavbar } from 'common/layout'
import { theme } from 'config'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${barlow.className} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme={'dark'} forceColorScheme={'dark'}>
          <Header />
          {children}
          <MobileFixedNavbar />
        </MantineProvider>
      </body>
    </html>
  )
}
