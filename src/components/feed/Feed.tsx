import { useEffect, useState } from 'react'
import { graphql, usePaginationFragment } from 'react-relay'
import { Virtuoso } from 'react-virtuoso'
import { FeedsQuery$key } from '../../queries/__generated__/FeedsQuery.graphql'
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
    <>
      <Virtuoso
        className="min-h-screen virtuoso-container"
        data={data.feeds.edges}
        endReached={loadNext}
        overscan={200}
        itemContent={(index, edge) => {
          return (
            edge?.node && <StoryPreview story={edge?.node} key={edge.node.id} />
          )
        }}
      />
      <style jsx>
        {`
          // hide scrollbar
          -webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  )
}

export default Feed
