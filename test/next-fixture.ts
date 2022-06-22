
import { createServer, Server } from 'http'
import { parse } from 'url'
import { test as base } from '@playwright/test'
import next from 'next'
import path from 'path'
import { AddressInfo } from 'net'
import { rest } from 'msw'
import type { SetupServerApi } from 'msw/node'
// Extend base test with our fixtures.
// Used by next-fixutre.ts to pass requestInterceptor to each test,
// where it can be used to set up the server-side request mocks.
export const requestInterceptor =
  process.env.PLAYWRIGHT === '1' && typeof window === 'undefined'
    ? (() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { setupServer } = require('msw/node')
        const requestInterceptor = setupServer()
        requestInterceptor.listen({
          // silence warnings when actual requests are made
          // https://github.com/mswjs/msw/issues/191#issuecomment-652292341
          onUnhandledRequest: 'bypass',
        })
        return requestInterceptor
      })()
    : undefined


const test = base.extend<{
  port: string
  requestInterceptor: SetupServerApi
  rest: typeof rest
}>({
  // the port function is the same as before
  port: [
    async ({}, use) => {
      const app = next({
        dev: false,
        dir: path.resolve(__dirname, '..'),
      })
      await app.prepare()
      const handle = app.getRequestHandler()
      // start next server on arbitrary port
      const server: Server = await new Promise((resolve) => {
        const server = createServer((req, res) => {
          const parsedUrl = parse(req.url!, true)
          handle(req, res, parsedUrl)
        })
        server.listen((error: any) => {
          if (error) throw error
          resolve(server)
        })
      })
      const port = String((server.address() as AddressInfo).port)
// provide port to tests
      await use(port)
    },
    {
      //@ts-ignore
      scope: 'worker',
      auto: true,
    },
  ],
  requestInterceptor: [
    async ({}, use) => {
      // Import requestInterceptor from the built app so we
      // can attach attach our mocks to it from each test
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      await use(requestInterceptor)
    },
    {
      //@ts-ignore
      scope: 'worker',
    },
  ],
  rest,
})
// this "test" can be used in multiple test files,
// and each of them will get the fixtures.
export default test
