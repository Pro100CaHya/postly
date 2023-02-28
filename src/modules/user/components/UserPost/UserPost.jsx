import React from "react";
import { useNavigate } from "react-router-dom";

import Wrap from "../../../../components/ui/layout/wrap/Wrap";

import "./UserPost.css";

const UserPost = ({ post }) => {
    const navigate = useNavigate();

    return (
        <li
            className="user__post"
            onClick={() => navigate(`/posts/${post.id}`)}
        >
            <Wrap
                variant={{
                    padding: "10-10"
                }}
            >
                <h2 className="user__post-title">
                    {post.title}
                </h2>
                <p className="user__post-body">
                    {post.body}
                </p>
            </Wrap>
        </li>
    );
};

export default UserPost;