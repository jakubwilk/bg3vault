import { getTranslations } from 'next-intl/server'
import { Box } from '@mantine/core'
import { RegisterPage } from 'auth/pages'

export async function generateMetadata() {
  const t = await getTranslations('AuthPage')

  return {
    title: t('Register.title'),
    description: t('Register.description'),
  }
}

export default function Register() {
  return (
    <main className={'w-full min-h-screen flex items-center justify-center'}>
      <div className={'px-4 md:px-8 py-8 md:py-12'}>
        <Box
          className={
            'w-full flex flex-col md:w-[75vw] lg:grid grid-cols-2 lg:w-[60vw] shadow-lg bg-white'
          }
        >
          <RegisterPage />
        </Box>
      </div>
    </main>
  )
}
