import { NextResponse } from 'next/server'
import { ApiDbScopeEnum } from 'common/models'
import { HttpStatusEnum } from 'common/utils'
import dataLoader from 'db/dataLoader'

export async function GET() {
  const data = await dataLoader(ApiDbScopeEnum.races)

  return NextResponse.json(data, { status: HttpStatusEnum.OK })
}
