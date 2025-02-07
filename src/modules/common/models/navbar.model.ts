import { MenuIconComponentEnum } from 'common/utils'

export interface IMenu {
  id: number
  label: string
  subLabel?: string
  href: string
  icon?: MenuIconComponentEnum
}
