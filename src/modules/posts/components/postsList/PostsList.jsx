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
        <>
            {
                postsError
                    ?
                    <Error message={postsError} />
                    :
                    isPostsLoading === true
                        ?
                        [0, 1, 2].map((loader) =>
                            <Row
                                key={loader}
                                variant={{
                                    margin: "20-20"
                                }}
                            >
                                <PostsItemSkeletonLoader />
                            </Row>
                        )
                        :
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
            }
        </>
    );
};

export default PostsList;