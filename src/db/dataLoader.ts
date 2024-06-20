import { ApiDbScopeEnum } from 'features/common/models'

const dataLoader = async (scope: keyof typeof ApiDbScopeEnum) => {
  if (!scope) {
    throw new Error(`Cannot get data without correct scope. Provided scope: ${scope}`)
  }

  const response = await fetch(`http://localhost:3000/data/${scope}.json`, {
    method: 'GET',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json()
}

export default dataLoader
