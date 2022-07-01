// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  res.status(200).json({
    success: 1,
    file: {
      url: req.body.url,
    },
  })
}
