import { graphql } from 'graphql';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { GraphQLResponse, Network, Environment, Store, RecordSource } from 'relay-runtime';

// Relay is not prescriptive about how GraphQL requests are made.
// This is an example showing how to request GraphQL data.
// You should fill this in with how to make requests to your GraphQL
// API of choice.

export function createServerNetwork() {
  return Network.create(async (params, variables) => {

    const results = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer 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`,
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
      })
  
    const text = await results.text()
    console.log(text)
  
    const data = JSON.parse(
      text,
      withHydrateDatetime
    ) as GraphQLResponse;

    return data;
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}