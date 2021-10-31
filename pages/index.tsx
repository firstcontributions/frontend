import Head from 'next/head'
import { graphql, fetchQuery } from 'react-relay'
import { initEnvironment } from '../lib/relay'
import FeedCotainer from '../components/FeedContainer'
import UserProfile from '../components/UserProfile'
import CircularProgress from '../components/CircularProgress'
import Navigation from '../components/Navigation'

export const Home = (): JSX.Element => (
  <div className="flex flex-col justify-center">
    <Head>
      <title>First Contributions</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <div className="flex flex-row container">
      <aside className="p-4 hidden md:block flex flex-col lg:w-1/5 items-center">
        <UserProfile />
      </aside>
      <main className="w-full md:w-2/3">
        <FeedCotainer />
      </main>
      <aside className="p-4 hidden md:block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a className="text-2xl">Login with Github</a>
        </button>
        <footer></footer>
      </aside>
    </div>
    <style jsx>{`
      .container {
        margin: auto;
      }
      main {
        background-color: #eef0f1;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

const indexPageQuery =  graphql`
query indexPage_indexQuery {
  viewer {
    ...BlogPosts_viewer
  }
}
`

export async function getStaticProps() {
  const environment = initEnvironment()
  const queryProps = await fetchQuery(environment, indexPageQuery)
  const initialRecords = environment.getStore().getSource().toJSON()

  return {
    props: {
      ...queryProps,
      initialRecords,
    },
  }
}

export default Home
