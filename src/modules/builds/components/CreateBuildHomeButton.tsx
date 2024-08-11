'use client'

import Link from 'next/link'
import { Text } from '@mantine/core'
import { IconCircleArrowRightFilled } from '@tabler/icons-react'
import clsx from 'clsx'
import { useAppSelector } from 'services/config'

import classes from './components.module.css'

export default function CreateBuildHomeButton() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Link
      href={'/builds/create'}
      className={clsx(
        'grid grid-cols-[48px,1fr] gap-4 w-full p-8 bg-white hover:bg-zinc-700 focus:bg-white focus-visible:bg-zinc-700',
        classes.createBuildButton,
      )}
    >
      <IconCircleArrowRightFilled size={48} className={'text-gray-300'} />
      <div className={'flex flex-col'}>
        <Text className={'uppercase font-bold text-2xl'}>{'Publish your build'}</Text>
        <Text className={'text-gray-500 font-light'}>
          {user
            ? `Create a new build as ${user.login}`
            : 'Create a new build as a guest. Remember that builds created as a guest cannot be assigned to a registered account'}
        </Text>
      </div>
    </Link>
  )
}
