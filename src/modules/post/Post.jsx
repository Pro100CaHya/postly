import React, { useEffect, useState } from "react";

import Row from "../../components/ui/layout/row/Row";
import PostCommentsList from "./postCommentsList/PostCommentsList";
import PostContent from "./postContent/PostContent";
import Error from "../../components/ui/error/Error";

import "./Post.css";
import { useFetching } from "../../hooks/useFetching";
import { PostService } from "./api/PostService";
import { useParams } from "react-router-dom";
import PostsItemSkeletonLoader from "../../components/ui/postsItemSkeletonLoader/PostsItemSkeletonLoader";
import PostCommentSkeletonLoader from "../../components/ui/postCommentSkeletonLoader/PostCommentSkeletonLoader";
import PostSkeletonLoader from "../../components/ui/postSkeletonLoader/PostSkeletonLoader";

const Post = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        console.log("Fetch post");
        const response = await PostService.getPostById(params.id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        console.log("Fetch comments");
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
                    isPostLoading
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