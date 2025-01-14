import { ReactNode } from 'react'

import classes from './wrapper.module.css'

interface IContentProps {
  children: ReactNode
}

export default function Content({ children }: IContentProps) {
  return (
    <main>
      <div className={'container mx-auto px-0 md:px-4'}>
        <div className={classes.content}>{children}</div>
      </div>
    </main>
  )
}
