import { graphql } from 'react-relay'

export default graphql`
  query indexQuery {
    viewer {
      login
    }
  }
`
