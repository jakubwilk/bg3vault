'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 2,
      gcTime: 0,
    },
  },
})

interface IProps {
  children: ReactNode
}

export default function ReactQueryProvider({ children }: IProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
