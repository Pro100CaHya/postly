import React, { useEffect, useState, useRef } from "react";

import PostsList from "../postsList/PostsList";
import Row from "../../../../components/ui/layout/row/Row";
import Error from "../../../../components/ui/error/Error";
import SpinnerLoader from "../../../../components/ui/spinnerLoader/SpinnerLoader";

import { usePosts } from "../../../../hooks/usePosts";
import { useFetching } from "../../../../hooks/useFetching";
import { PostsService } from "../../api/PostsService";
import { useObserver } from "../../../../hooks/useObserver";

const InfinitePostsList = ({ limit, filter, view }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const response = await PostsService.getAll(limit, page);

        setPosts([...posts, ...response.data]);
        setTotalPages(Math.ceil(parseInt(response.headers["x-total-count"]) / limit));
    });
    const filteredPosts = usePosts(posts, filter);
    const lastElem = useRef();

    useObserver(lastElem, currentPage < totalPages, isPostsLoading, () => {
        setCurrentPage(currentPage + 1);
    })

    useEffect(() => {
        fetchPosts(limit, currentPage)
    }, [limit, currentPage]);

    return (
        <>
            {
                postsError
                    ?
                    <Error message={postsError} />
                    :
                    <PostsList
                        posts={filteredPosts}
                        isPostsLoading={isPostsLoading}
                        postsError={postsError}
                        view={view}
                    />
            }
            <Row
                variant={{
                    margin: "20-0"
                }}
            >
                {
                    isPostsLoading
                        ?
                        <SpinnerLoader />
                        :
                        <div ref={lastElem}></div>
                }
            </Row>
        </>
    );
};

export default InfinitePostsList;