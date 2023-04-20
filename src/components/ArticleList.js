import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList () {
    return (
        <div>
            {blogData.posts.map((post) => (
                <Article 
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                    minutes={post.minutes}
                />
            ))}
        </div>
    )
}
export default ArticleList