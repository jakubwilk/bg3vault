export const dynamic = 'force-dynamic'
import dataLoader from 'db/dataLoader'
import { ApiDbScopeEnum } from 'features/common/models'

export default async function Page() {
  const data = await dataLoader(ApiDbScopeEnum.races)

  console.log('data', data)

  return new Response(data, { status: 200 })
}

// import type { NextApiRequest, NextApiResponse } from 'next'
// import dataLoader from 'db/dataLoader'
// import { ApiDbScopeEnum } from 'features/common/models'

// export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
//   const data = await dataLoader(ApiDbScopeEnum.races)

//   res.status(200).json({ data })
// }
