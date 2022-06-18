// https://github.com/oauth/authorize?client_id=6903aa8547a474fb9202&redirect_uri=http%3A%2F%2Fapi.firstcontributions.com%2Fv1%2Fauth%2Fcallback&response_type=code&state=ba108af9-97f1-11ec-8e19-0242ac1e0106
//
export function GetRedirectURL() {
  const url = new URL('https://github.com/login/oauth/authorize')
  url.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID!)
  url.searchParams.set('redirect_uri', process.env.GITHUB_REDIRECT_URI!)
  url.searchParams.set('respose_type', 'code')
  return url.toString()
}

export async function GetAuthToken(code: string) {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code: code,
    redirect_uri: process.env.GITHUB_REDIRECT_URI!,
  }
  const request = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }
  const result = await fetch(
    'https://github.com/login/oauth/access_token',
    request
  )
  return result.text()
}
