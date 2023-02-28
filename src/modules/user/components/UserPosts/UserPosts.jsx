import React from "react";
import UserPost from "../UserPost/UserPost";

import "./UserPosts.css";

const UserPosts = ({ userPosts }) => {
    return (
        <ul className="user__posts">
            {
                userPosts.map((post) =>
                    <UserPost
                        key={post.id}
                        post={post}
                    />
                )
            }
        </ul>
    );
};

export default UserPosts;