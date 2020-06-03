import React from 'react'

function BlogPost(props) {
    return (
        <div className="postInfo">
            <h2>{props.excerpts.title}</h2>
            <h3>{props.excerpts.subTitle}</h3>
            <p>Posted by <span className="blogAuthor">{props.excerpts.author}</span> on {props.excerpts.date}. </p>
        </div>
    )
}

export default BlogPost
