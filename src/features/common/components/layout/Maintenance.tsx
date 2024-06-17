'use client'

import { Text } from '@mantine/core'

export default function Maintenance() {
  return (
    <div className={'px-4 py-2 md:px-8 w-full bg-indigo-500'}>
      <div className={'container mx-auto'}>
        <div className={'flex items-center justify-center gap-4'}>
          <span>{'🚧'}</span>
          <Text className={'text-center text-zinc-50'}>
            {'Please remember that (fanmade) Baldurs Gate 3 web API is still under construction'}
          </Text>
          <span>{'🚧'}</span>
        </div>
      </div>
    </div>
  )
}
