import React from "react";

import PostsItem from "../postsItem/PostsItem";

import "./PostsList.css";

const PostsList = ({ posts, view }) => {
    const classes = ["posts__list"];

    if (view === "grid") {
        classes.push("posts__list_view_grid");
    }

    return (
        <ul
            className={classes.join(" ")}
        >
            {
                posts.map((post) =>
                    <PostsItem
                        key={post.id}
                        post={post}
                        view={view}
                    />
                )
            }
        </ul>
    );
};

export default PostsList;