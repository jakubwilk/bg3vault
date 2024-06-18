import { type NextRequest } from 'next/server'
import dataLoader from 'db/dataLoader'
import { ApiDbScopeEnum } from 'features/common/models'

export default async function GET(req: NextRequest) {
  console.log('req', { req })
  const data = await dataLoader(ApiDbScopeEnum.races)

  console.log('data', data)

  return new Response(data, { status: 200 })
}
