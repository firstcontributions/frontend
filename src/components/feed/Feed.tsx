import { graphql, usePaginationFragment } from 'react-relay'
import { FeedsQuery$key } from '../../queries/__generated__/FeedsQuery.graphql'
import StoryPreview from './StoryPreview'

type FeedProps = {
  root: FeedsQuery$key
}

const Feed = ({ root }: FeedProps) => {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment FeedsQuery on Query
      @refetchable(queryName: "FeedsRoot_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
        feeds(first: $count, after: $cursor)
          @connection(key: "RootQuery__feeds") {
          edges {
            node {
              id
              ...StoryPreview_node
            }
          }
        }
      }
    `,
    root
  )

  return (
    <>
      {data.feeds.edges.map(
        (edge) => edge && <StoryPreview story={edge?.node} />
      )}
    </>
  )
}

export default Feed
