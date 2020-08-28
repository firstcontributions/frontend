import Post from "./Post"

const Posts = ({posts}) => (
    <>
    {posts.map((post) => <Post post={post} />)}
    </>
)

export default Posts