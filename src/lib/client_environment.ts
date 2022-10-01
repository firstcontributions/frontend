import { getRelaySerializedState } from 'relay-nextjs'
import { Environment, Network, Store, RecordSource } from 'relay-runtime'
import { fetchGraphQL } from './relay'

export function createClientNetwork() {
  return Network.create(fetchGraphQL)
}

let clientEnv: Environment | undefined
export function getClientEnvironment() {
  if (typeof window === 'undefined') return null

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource(getRelaySerializedState()?.records)),
      isServer: false,
    })
  }

  return clientEnv
}
