import React, { useEffect, useState } from "react";

import PostsList from "../postsList/PostsList";
import Pagination from "../../../../components/ui/pagination/Pagination";
import Row from "../../../../components/ui/layout/row/Row";

import { usePosts } from "../../hooks/usePosts";
import { useFetching } from "../../hooks/useFetching";
import { PostService } from "../../api/PostService";

const PagesPostsList = ({ curLimit, prevLimit, filter, view}) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (prevLimit, curLimit, page) => {
        debugger;
        let fetchedPage = page;

        if (prevLimit * fetchedPage < curLimit * fetchedPage) {
            fetchedPage = Math.ceil(totalPosts / curLimit);
            setCurrentPage(fetchedPage);
        }

        const response = await PostService.getAll(curLimit, fetchedPage);
        setPosts(response.data);
        setTotalPosts(parseInt(response.headers["x-total-count"]));
        setTotalPages(Math.ceil(parseInt(response.headers["x-total-count"]) / curLimit));
    });

    const filteredPosts = usePosts(posts, filter);

    useEffect(() => {
        fetchPosts(prevLimit, curLimit, currentPage);
    }, [currentPage, curLimit]);

    return (
        <>
            <PostsList
                posts={filteredPosts}
                isPostsLoading={isPostsLoading}
                postsError={postsError}
                view={view}
            />
            <Row
                variant={{
                    margin: "40-0"
                }}
            >
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalCount={totalPosts}
                    limit={curLimit}
                    isPostsLoading={isPostsLoading}
                />
            </Row>
        </>
    );
};

export default PagesPostsList;