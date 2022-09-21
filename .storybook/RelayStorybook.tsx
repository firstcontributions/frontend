import { ReactNode, useEffect, useState } from 'react'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'

import { IEnvironment } from 'relay-runtime'
import RelayEnvironmentProvider from '../src/lib/RelayEnvironmentProvider'
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment'

type RelayStorybookProps = {
  children: ReactNode
  mockResolvers?: Record<string, unknown>
}
export const RelayStorybook = ({
  children,
  mockResolvers = {},
}: RelayStorybookProps) => {
  const [environment] = useState(() => createMockEnvironment())

  useEffect(() => {
    try {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, mockResolvers)
      )
    } catch (err) {
      // handle no operation
      // eslint-disable-next-line
      console.log({
        err,
      })
    }
  }, [])

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
