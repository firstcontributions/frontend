import Head from 'next/head'
import FeedCotainer from '../components/FeedContainer'
import UserProfile from '../components/UserProfile';

export const Home = (): JSX.Element => (
  <div className="container flex justify-center">
    <Head>
      <title>First Contributions</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        dangerouslySetInnerHTML={{
        __html: `
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//webstats.gnome.org/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '31']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
        `
      }}>
</script>
    </Head>
    <aside className="p-4">
      <UserProfile />
    </aside>
    <main className="w-full md:w-2/3">
      <FeedCotainer />
    </main>
    <aside className="p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a className="text-2xl">Login with Github</a>
      </button>
    <footer></footer>
    </aside>


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

export default Home
