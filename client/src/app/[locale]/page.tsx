import { getTranslations } from 'next-intl/server'
import { LanguageSwitcher } from 'common/components'
import { getUserSessionData } from 'common/utils'
import { Link } from 'i18n/routing'
import { AccountActivationBar } from 'users/components'

export default async function Home() {
  const { data } = await getUserSessionData()
  const t = await getTranslations('Common')

  return (
    <main className={'min-h-full'}>
      <AccountActivationBar data={data} />
      <div className={'container mx-auto min-h-[inherit]'}>
        <div className={'min-h-[inherit] flex flex-col gap-6 px-4'}>
          <div className={'flex items-center justify-center gap-4'}>
            <Link href={'/login'} className={'text-white'}>
              {t('Navigation.login')}
            </Link>
            <Link href={'/register'} className={'text-white'}>
              {t('Navigation.register')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </main>
  )
}
