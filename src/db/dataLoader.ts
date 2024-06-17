import { ApiDbScopeEnum } from 'features/common/models'
import { readFile } from 'fs/promises'
import path from 'path'

const dataLoader = async (scope: keyof ApiDbScopeEnum) => {
  if (!scope) {
    throw new Error(`Cannot get data without correct scope. Provided scope: ${scope}`)
  }

  const data = (
    await readFile(path.resolve(process.cwd(), `./../../public/data/${scope}.json`))
  ).toString()

  return JSON.parse(data)
}

export default dataLoader
