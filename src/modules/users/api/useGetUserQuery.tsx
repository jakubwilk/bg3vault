import { useQuery } from '@tanstack/react-query'
import api from 'services/api-dep'

export const GetUserKey = 'GET_USER_KEY'

const getUser = async () => {
  const { data } = await api.post('/api/users/get')

  return data
}

export default function useGetUserQuery() {
  return useQuery({ queryKey: [GetUserKey], queryFn: getUser })
}
