import * as React from 'react';
import Posts from './post/Posts';
import {posts} from '../cypress/fixtures/posts.json'

// eslint-disable-next-line
export interface FeedCotainerProps {
}
 
const FeedCotainer: React.SFC<FeedCotainerProps> = () => {
    return (<div className="feed-container">
    <Posts posts={posts}/>
    <style jsx>{`
      .feed-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    @media screen and (min-width:576px) {
        .feed-container { width 60%;}
    }
    @media screen and (min-width:768px) {
        .feed-container { width 40%;}
    }
    `}</style>
    </div>  );
}
 
export default FeedCotainer;