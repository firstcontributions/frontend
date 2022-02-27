import { withHydrateDatetime } from 'relay-nextjs/date';
import { GraphQLResponse } from 'relay-runtime';


export  async function fetchGraphQL (params, variables) {
  const results = await fetch('http://api.firstcontributions.com/v1/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  })

  const text = await results.text()
  
  const data = JSON.parse(
    text,
    withHydrateDatetime
  ) as GraphQLResponse;

  return data;
}

