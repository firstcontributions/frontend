import { graphql, usePaginationFragment } from 'react-relay'
import { MyStories__Query$key } from '__generated__/MyStories__Query.graphql'
import StoryPreview from './StoryPreview'

type MyStoriesProps = {
  user: MyStories__Query$key
}

const MyStories = ({ user }: MyStoriesProps) => {
  const { data } = usePaginationFragment(
    graphql`
      fragment MyStories__Query on User
      @refetchable(queryName: "MyStoriesUser_Query")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      ) {
        stories(first: $count, after: $cursor)
          @connection(key: "UserQuery__stories") {
          edges {
            node {
              id
              ...StoryPreview_node
            }
          }
        }
      }
    `,
    user
  )

  return (
    <>
      {data.stories.edges.map(
        (edge) => edge && <StoryPreview story={edge?.node} key={edge.node.id} />
      )}
    </>
  )
}

export default MyStories
