import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../../hooks/useFetching";
import { PostService } from "./api/PostService";

import Row from "../../components/ui/layout/row/Row";
import PostCommentsList from "./components/postCommentsList/PostCommentsList";
import PostContent from "./components/postContent/PostContent";
import Error from "../../components/ui/error/Error";
import PostCommentSkeletonLoader from "../../components/ui/postCommentSkeletonLoader/PostCommentSkeletonLoader";
import PostSkeletonLoader from "../../components/ui/postSkeletonLoader/PostSkeletonLoader";

import "./Post.css";

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const postResponse = await PostService.getPostById(params.id);
        const authorResponse = await PostService.getPostAuthor(postResponse.data.userId);

        setPost({
            ...postResponse.data,
            user: authorResponse.data.username
        });
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getPostComments(params.id);

        setComments(response.data);
    });

    useEffect(() => {
        const fetching = async () => {
            await fetchPost();
            await fetchComments();
        }

        fetching();
    }, []);

    return (
        <>
            {
                postError
                    ?
                    <Error />
                    :
                    isPostLoading || post.title === undefined
                        ?
                        <PostSkeletonLoader />
                        :
                        <div className="post">
                            <Row
                                variant={{
                                    margin: "0-40"
                                }}
                            >
                                <PostContent post={post} />
                            </Row>
                            <Row
                                variant={{
                                    margin: "40-0"
                                }}
                            >
                                <h2 className="post__comment-title">
                                    Comments
                                </h2>
                                {
                                    commentsError
                                        ?
                                        <Error />
                                        :
                                        isCommentsLoading
                                            ?
                                            [0, 1].map((loader) =>
                                                <Row
                                                    key={loader}
                                                    variant={{
                                                        margin: "20-20"
                                                    }}
                                                >
                                                    <PostCommentSkeletonLoader />
                                                </Row>
                                            )
                                            :
                                            <PostCommentsList comments={comments} />
                                }
                            </Row>
                        </div>
            }
        </>
    );
};

export default Post;