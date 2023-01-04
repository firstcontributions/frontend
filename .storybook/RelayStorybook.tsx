import { ReactNode, useEffect, useState } from 'react'
import { RelayEnvironmentProvider } from 'react-relay'
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'

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
