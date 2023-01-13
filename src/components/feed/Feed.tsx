import { graphql, usePaginationFragment } from 'react-relay'
import { Virtuoso } from 'react-virtuoso'
import { FeedsQuery$key } from '__generated__/FeedsQuery.graphql'
import StoryPreview from './StoryPreview'

type FeedProps = {
  root: FeedsQuery$key
}

const Feed = ({ root }: FeedProps) => {
  const { data, loadNext } = usePaginationFragment(
    graphql`
      fragment FeedsQuery on Query
      @refetchable(queryName: "FeedsRoot_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 4 }
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
    <div>
      <Virtuoso
        className="min-h-screen scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-300 dark:scrollbar-track-gray-500"
        data={data.feeds.edges}
        endReached={loadNext}
        overscan={200}
        itemContent={(index, edge) => {
          return (
            edge?.node && <StoryPreview story={edge?.node} key={edge.node.id} />
          )
        }}
      />
    </div>
  )
}

export default Feed
