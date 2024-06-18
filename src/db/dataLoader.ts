import { ApiDbScopeEnum } from 'features/common/models'

const dataLoader = async (scope: keyof typeof ApiDbScopeEnum) => {
  if (!scope) {
    throw new Error(`Cannot get data without correct scope. Provided scope: ${scope}`)
  }

  const response = await fetch(`./../../public/data/${scope}.json`, {
    method: 'GET',
    credentials: 'omit',
  })

  return response.json()
}

export default dataLoader
