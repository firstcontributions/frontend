// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AuthorizationCode } from 'simple-oauth2';
import { config } from '../../lib/server/githubClient';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const client = new AuthorizationCode(config);
  
    let authorizationUri = client.authorizeURL({
      redirect_uri: 'http://localhost:3000/api/authcallback',
      scope: '',
    });
    // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    authorizationUri = authorizationUri.replace('/oauth', '/login/oauth')
    console.log(authorizationUri)
    res.redirect(authorizationUri);
}
