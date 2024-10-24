import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ReactQueryProvider, StoreProvider } from 'providers'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin-ext'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={barlow.className}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <MantineProvider
              theme={{
                primaryColor: 'larian',
                colors: {
                  larian: [
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
              }}
            >
              <Notifications />
              <ReactQueryProvider>
                <div className={'flex flex-col justify-between gap-6 min-h-screen'}>{children}</div>
              </ReactQueryProvider>
            </MantineProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
