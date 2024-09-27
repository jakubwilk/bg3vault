'use client'

import { Fragment, useState } from 'react'
import { Box, Button, Text } from '@mantine/core'
import { IAuthUser } from 'auth/models'
import clsx from 'clsx'
import { isNil } from 'lodash'

import classes from './components.module.css'

interface IProps {
  data: IAuthUser
}

export default function AccountActivationBar({ data }: IProps) {
  const [isEmailSent, setIsEmailSent] = useState(false)

  const handleSendActivationLink = () => {
    console.log('link sent')
    setIsEmailSent(true)
  }

  if (isNil(data) || data?.isActivated) {
    return null
  }

  return (
    <section className={clsx('w-full py-4', classes.accountActivationBar)}>
      <div className={'container mx-auto px-4'}>
        <Box className={'flex items-center justify-center gap-1'}>
          {isEmailSent ? (
            <Text>{'Email has been sent, please check your mailbox'}</Text>
          ) : (
            <Fragment>
              <Text>
                {'Most functionality on the site is disabled until you activate your account.'}
              </Text>
              <Button
                color={'transparent'}
                className={clsx(
                  'p-0 h-auto font-normal underline duration-100 hover:no-underline hover:bg-transparent focus-within:no-underline focus-within:bg-transparent',
                  classes.accountActivationBarButton,
                )}
                onClick={handleSendActivationLink}
              >
                {'Send activation link'}
              </Button>
            </Fragment>
          )}
        </Box>
      </div>
    </section>
  )
}
