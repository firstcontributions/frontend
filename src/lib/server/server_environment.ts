import { NextPageContext } from 'next'
import { Network, Environment, Store, RecordSource } from 'relay-runtime'
import { makeFetchGraphql } from '../relay'

// Relay is not prescriptive about how GraphQL requests are made.
// This is an example showing how to request GraphQL data.
// You should fill this in with how to make requests to your GraphQL
// API of choice.

export function createServerNetwork(ctx: NextPageContext) {
  return Network.create(makeFetchGraphql(ctx))
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment(ctx: NextPageContext) {
  return new Environment({
    network: createServerNetwork(ctx),
    store: new Store(new RecordSource()),
    isServer: true,
  })
}
