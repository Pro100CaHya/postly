import React from "react";

import PostsItem from "../postsItem/PostsItem";

import Row from "../../../../components/ui/layout/row/Row";
import PostsItemSkeletonLoader from "../../../../components/ui/postsItemSkeletonLoader/PostsItemSkeletonLoader";
import Error from "../../../../components/ui/error/Error";

import "./PostsList.css";

const PostsList = ({ posts, isPostsLoading, postsError, view }) => {
    const classes = ["posts__list"];

    if (view === "grid") {
        classes.push("posts__list_view_grid")
    }

    return (
        <ul className={classes.join(" ")}>
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