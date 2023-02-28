import React from "react";
import PostCommentsItem from "../postCommentsItem/PostCommentsItem";

import "./PostCommentsList.css";

const PostCommentsList = ({comments}) => {
    return (
        <ul className="post__comments">
            {
                comments.map((comment) =>
                    <PostCommentsItem
                        key={comment.id}
                        comment={comment}
                    />
                )
            }
        </ul>
    );
};

export default PostCommentsList;