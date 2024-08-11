'use client'

import { Grid, Text, Title } from '@mantine/core'
import { IconUsersGroup } from '@tabler/icons-react'

export default function BuildsHomeWrapper() {
  return (
    <section className={'bg-transparent'}>
      <Grid grow gutter={1}>
        <Grid.Col span={6}>
          <div
            className={'h-full flex items-center justify-center flex-col gap-2 p-8 bg-amber-200'}
          >
            <IconUsersGroup size={48} className={'text-zinc-700'} />
            <Title order={3} className={'uppercase tracking-wider text-2xl text-black'}>
              {'Last builds'}
            </Title>
            <Text className={'text-zinc-700 font-light'}>
              {'Recent builds added to the site by guests and registered users'}
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
