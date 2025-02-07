import { ReactNode } from 'react'
import {
  IconBook,
  IconHelpCircle,
  IconHome,
  IconMenu,
  IconNews,
  IconUser,
} from '@tabler/icons-react'
import { IMenu } from 'common/models'

export enum MenuIconComponentEnum {
  HOME = 'HOME',
  MENU = 'MENU',
  USER = 'USER',
  HELP = 'HELP',
  BOOK = 'BOOK',
  NEWS = 'NEWS',
}

export const renderMenuIconComponent = (
  name: MenuIconComponentEnum,
  size: number = 18,
): ReactNode => {
  switch (name) {
    case MenuIconComponentEnum.HOME:
    default:
      return <IconHome stroke={1.5} size={size} />
    case MenuIconComponentEnum.MENU:
      return <IconMenu stroke={1.5} size={size} />
    case MenuIconComponentEnum.USER:
      return <IconUser stroke={1.5} size={size} />
    case MenuIconComponentEnum.HELP:
      return <IconHelpCircle stroke={1.5} size={size} />
    case MenuIconComponentEnum.BOOK:
      return <IconBook stroke={1.5} size={size} />
    case MenuIconComponentEnum.NEWS:
      return <IconNews stroke={1.5} size={18} />
  }
}

export const APP_DESKTOP_MENU: IMenu[] = [
  {
    id: 1,
    label: 'Home page',
    href: '/',
    icon: MenuIconComponentEnum.HOME,
  },
  {
    id: 2,
    label: 'BG3 Non-Origin Builds',
    subLabel: 'Custom Tav',
    href: '/builds-tav',
    icon: MenuIconComponentEnum.HELP,
  },
  {
    id: 3,
    label: 'BG3 Guides',
    href: '/guides',
    icon: MenuIconComponentEnum.BOOK,
  },
  {
    id: 4,
    label: 'News and information',
    href: '/news',
    icon: MenuIconComponentEnum.NEWS,
  },
]
