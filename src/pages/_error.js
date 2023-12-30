/**
 * NOTE: This requires `@sentry/nextjs` version 7.3.0 or higher.
 *
 * NOTE: If using this with `next` version 12.2.0 or lower, uncomment the
 * penultimate line in `CustomErrorComponent`.
 *
 * This page is loaded by Nextjs:
 *  - on the server, when data-fetching methods throw or reject
 *  - on the client, when `getInitialProps` throws or rejects
 *  - on the client, when a React lifecycle method throws or rejects, and it's
 *    caught by the built-in Nextjs error boundary
 *
 * See:
 *  - https://nextjs.org/docs/basic-features/data-fetching/overview
 *  - https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
 *  - https://reactjs.org/docs/error-boundaries.html
 */

import * as Sentry from '@sentry/nextjs'
import NextErrorComponent from 'next/error'

const CustomErrorComponent = ({ statusCode, error }) => {
  if (statusCode === 404) {
    return <h1>404 - Page Not Found</h1>
  }

  // Add additional error handling logic here based on error type or status code

  // Capture the error with Sentry
  Sentry.captureException(error)

  // Return the default error component
  return <NextErrorComponent statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  try {
    // Attempt to fetch initial props and return them
    return await NextErrorComponent.getInitialProps(contextData)
  } catch (error) {
    // If there's an error, capture it with Sentry and pass it to the error component
    await Sentry.captureException(error)
    return { statusCode: 500, error }
  }
}

export default CustomErrorComponent

