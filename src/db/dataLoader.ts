import { ApiDbScopeEnum, ApiLangEnum } from 'common/models'

const dataLoader = async (
  scope: keyof typeof ApiDbScopeEnum,
  lang: keyof typeof ApiLangEnum = 'en',
) => {
  if (!scope) {
    throw new Error(`Cannot get data without correct scope. Provided scope: ${scope}`)
  }

  if (!lang) {
    throw new Error(`Cannot get data without correct lang. Provided lang: ${lang}`)
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
