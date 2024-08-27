'use client'

import { Grid, Text, Title } from '@mantine/core'
import { IconNews } from '@tabler/icons-react'

export default function NewsHomeWrapper() {
  return (
    <section className={'bg-transparent'}>
      <Grid grow gutter={1}>
        <Grid.Col span={6}>
          <div className={'h-full flex items-center justify-center flex-col gap-2 p-8 bg-zinc-700'}>
            <IconNews size={48} className={'text-zinc-500'} />
            <Title order={3} className={'uppercase tracking-wider text-2xl text-white'}>
              {'Blog feed'}
            </Title>
            <Text className={'text-zinc-400 font-light'}>
              {'Latest news about '}
              <span className={'text-amber-200 font-medium'}>{'bg3builds'}</span>
              {' page and changes'}
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={'h-full bg-white p-8'}>{'...'}</div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div className={'h-full bg-white p-8'}>{'...'}</div>
        </Grid.Col>
      </Grid>
    </section>
  )
}
