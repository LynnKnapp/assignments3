import React from 'react'
import Post from './Post';


const PostList=(post)=>{
    const eachPost =[{
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 feet up. ',
        date: 'Posted by Start Bootstrap on September, 24, 2019',
    },{
        title: "I believe every human has a finite number of heartbeats.  I don't intend to waste any of mine.",
        subtitle: "Yada yada yada",
        date: "Posted by Start Bootstrap on September 18, 2019"
    },{
        title: "Science has not yet mastered prophecy",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        date: "Posted by Start BootStrap on September 24, 2019",
    }, {
        title: "Failure is not an option",
        subtitle: "Many say exploration is a part of our destiny, but it's actually our duty to future generations.",
        date: "Posted by Start BootStrap on July 8, 2019",
    }   
    ]
    const mappedPostList = eachPost.map((post, i) =>
                  <Post
                        key ={i + post.title} 
                        title ={post.title}
                        subtitle ={post.title}
                        date ={post.date} />
    
    )

    return(
        <div>
            {mappedPostList}
        </div>
    )
}
export default PostList
