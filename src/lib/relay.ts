import { NextPageContext } from 'next'
import { withHydrateDatetime } from 'relay-nextjs/date'
import { GraphQLResponse } from 'relay-runtime'

type Params = {
  text: string | null | undefined
}

type QueryVars = Record<any, any>

export async function fetchGraphQL(params: Params, variables: QueryVars) {
  const results = await fetch('http://api.firstcontributions.com/v1/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  const text = await results.text()
  const data = JSON.parse(text, withHydrateDatetime) as GraphQLResponse

  return data
}

export const makeFetchGraphql = (ctx: NextPageContext) => {
  return async function fetchGraphQL(params: Params, variables: QueryVars) {
    const results = await fetch(
      'http://api.firstcontributions.com/v1/graphql',
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Cookie: ctx.req ? ctx.req.headers.cookie! : '',
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
      }
    )

    const text = await results.text()
    console.log('response', text)
    const data = JSON.parse(text, withHydrateDatetime) as GraphQLResponse

    return data
  }
}
