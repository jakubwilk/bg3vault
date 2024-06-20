import { NextResponse } from 'next/server'
import dataLoader from 'db/dataLoader'
import { ApiDbScopeEnum } from 'features/common/models'

export async function GET() {
  const data = await dataLoader(ApiDbScopeEnum.races)

  return NextResponse.json(data, { status: 200 })
}
