import React from 'react'
import BlogPost from './BlogPost'

import blogExcerpts from "../blogExcerpts"


function BlogList() {
    const archives = blogExcerpts.map( blog => 
        <BlogPost key={blogExcerpts.indexOf(blog)} excerpts={blog} />)
    return (
        <main className="blogListContainer">
            {archives}
            <button>Older Posts -></button>
            <hr />
        </main>
    )
}

export default BlogList
