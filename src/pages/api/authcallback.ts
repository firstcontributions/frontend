// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error';
import { GetAuthToken } from '../../lib/server/githubClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
  
    try {
      const accessToken = await GetAuthToken(req.query.code as string);
        res.status(200).json({accessToken})
    } catch (error) {
        res.status(500).json({error: error})
    }
}