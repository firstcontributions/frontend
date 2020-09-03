import * as React from 'react';

export interface CoverImageProps {
   coverImage: string; 
}
 
const CoverImage: React.SFC<CoverImageProps> = (props) => {
    return ( props.coverImage ? <div className="cover-image">
        {props.children}
    <style jsx>{`
      .cover-image {
        width: 100%;
        padding: 10rem .2rem .2rem .2rem;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        background-image: ${`url(${props.coverImage})`};
        background-position: center;
        background-size: cover;
        }
        @media screen and (min-width:576px) {
            .cover-image { 
        padding: 20rem .4rem .4rem .4rem;
                }
      }
    `}</style>
    </div> : <></> );
}
 
export default CoverImage;