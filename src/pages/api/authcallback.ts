// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2';
import { config } from '../../lib/server/githubClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const client = new AuthorizationCode(config);
    console.log('req code: ', req.query.code)
   
    const tokenParams = {
      code: req.query.code as string,
      redirect_uri: 'http://localhost:3000/api/authcallback',
      scope: '',
    };
  
    try {
      const accessToken = await client.getToken(tokenParams);
      console.log(accessToken)
        res.status(200).json({accessToken})
    } catch (error) {
      console.log('Access Token Error', error.message);
        res.status(500).json({error: error.message})
    }
}