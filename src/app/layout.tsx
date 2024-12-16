import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const theme = createTheme({
  colors: {
    main: [
      '#FCF3CC',
      '#FCEFBD',
      '#FFEDAE',
      '#FFEA9D',
      '#FFE588',
      '#FFE177',
      '#FBDD76',
      '#F6D974',
      '#ECD070',
      '#D9BE69',
    ],
  },
  primaryColor: 'main',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
