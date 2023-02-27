import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import Wrap from "../../../../components/ui/layout/wrap/Wrap";

import "./PostsItem.css";

const PostsItem = ({ post, view }) => {
    const navigate = useNavigate();

    const classes = ["posts__item"];

    if (view === "grid") {
        classes.push("posts__item_view_grid")    
    }

    console.log("Перерисовка")

    return (
        <li
            className={classes.join(" ")}
            onClick={() => navigate(`/posts/${post.id}`)}
        >
            <Wrap
                variant={{
                    padding: "10-10"
                }}
            >
                <h2 className="posts__item-title">
                    {post.title}
                </h2>
                <p className="posts__item-body">
                    {post.body}
                </p>
            </Wrap>
        </li>
    );
};

export default memo(PostsItem);