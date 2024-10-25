import { useLocale } from 'next-intl'
import { routing } from 'i18n/routing'

import LanguageSwitcherDropdown from './LanguageSwitcherDropdown'

export default function LanguageSwitcher() {
  const locale = useLocale()

  return <LanguageSwitcherDropdown langs={routing.locales} value={locale} />
}
