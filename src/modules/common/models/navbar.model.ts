import { ReactNode } from 'react'

export interface IMenu {
  id: number
  label: string
  subLabel?: string
  href: string
  icon?: ReactNode
}
