'use client'

import { useQuery } from '@tanstack/react-query'
import api from 'services/fetch'

export const GetUserKey = 'GET_USER_KEY'

const getUser = async () => {
  const { data } = await api.get('/api/users/session')

  return data
}

export default function useGetUserQuery() {
  return useQuery({ queryKey: [GetUserKey], queryFn: getUser })
}
