'use client'

import { Text } from '@mantine/core'

export default function Footer() {
  return (
    <footer className={'bg-zinc-700'}>
      <div className={'container mx-auto'}>
        <div className={'px-4 py-8 flex items-center justify-between flex-col md:flex-row gap-4'}>
          <Text className={'font-light text-sm text-center md:text-left text-zinc-400'}>
            {'Open source '}
            <span className={'font-semibold text-amber-200'}>{'BG3builds'}</span> {'application'}
          </Text>
          <Text className={'font-light text-sm text-center md:text-right text-zinc-400'}>
            {
              "All descriptions related to Baldur's Gate 3 game are based on information available on "
            }
            <a
              href={'https://bg3.wiki/'}
              target={'_blank'}
              className={'font-semibold text-amber-200 hover:text-white focus-visible::text-white'}
              title={"Baldur's Gate 3 wiki"}
            >
              {'bg3.wiki'}
            </a>
            <br />
            {
              'This application does not charge any cost for the ability to use it or access the resources held here'
            }
            <br />
            {'This application is not affiliated with Larian Studios.'}
          </Text>
        </div>
      </div>
    </footer>
  )
}
