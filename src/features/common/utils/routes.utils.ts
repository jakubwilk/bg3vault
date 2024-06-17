import { INavigationLink } from '../models'

export enum RouteEnum {
  // eslint-disable-next-line no-unused-vars
  DOCS = '/',
  // eslint-disable-next-line no-unused-vars
  BLOG = '/blog',
}

export const HEADER_MENU: INavigationLink[] = [
  {
    id: 1,
    name: 'Docs',
    href: RouteEnum.DOCS,
    title: 'Well documented fan web API',
  },
  {
    id: 2,
    name: 'Blog',
    href: RouteEnum.BLOG,
    title: 'Latest news about api changes and current site',
  },
]
