import * as React from 'react';

export interface AuthorProfileProps {
    avatar: string
    reputation: string
}
 
const AuthorProfile: React.SFC<AuthorProfileProps> = (props) => {
    return ( <div className="author-stats">
        <div className="author-profile"></div>
        <span>{props.reputation}</span>
    <style jsx>{`
        .author-stats {
            display: flex;

        }
      .author-profile {
        width: 3rem;
        height: 3rem;
        margin-top: -2.5rem;
        border-radius: 50%;
        border: 4px solid #ffffff;
        background-image: ${`url(${props.avatar})`};
        background-position: center;
        background-size: contain;
      }
        @media screen and (min-width:576px) {
            .author-profile { 
        width: 5rem;
        height: 5rem;
        margin-top: -3.5rem;
                }
      }
    `}</style>
    </div> );
}
 
export default AuthorProfile;