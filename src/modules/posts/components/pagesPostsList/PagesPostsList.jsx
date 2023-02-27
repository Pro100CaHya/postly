import React, { useEffect, useState } from "react";

import PostsList from "../postsList/PostsList";
import Pagination from "../../../../components/ui/pagination/Pagination";
import Row from "../../../../components/ui/layout/row/Row";
import Error from "../../../../components/ui/error/Error";
import PostsItemSkeletonLoader from "../../../../components/ui/postsItemSkeletonLoader/PostsItemSkeletonLoader";

import { usePosts } from "../../../../hooks/usePosts";
import { useFetching } from "../../../../hooks/useFetching";
import { PostsService } from "../../api/PostsService";

const PagesPostsList = ({ limit, filter, view }) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
        const response = await PostsService.getAll(limit, page);

        setPosts(response.data);
        setTotalPosts(parseInt(response.headers["x-total-count"]));
    });

    const filteredPosts = usePosts(posts, filter);

    useEffect(() => {
        if (limit * currentPage > totalPosts && totalPosts !== 0) {
            setCurrentPage(Math.ceil(totalPosts / limit));
        } else {
            fetchPosts(limit, currentPage);
        }
    }, [currentPage, limit]);

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
                        <PostsList
                            posts={filteredPosts}
                            isPostsLoading={isPostsLoading}
                            postsError={postsError}
                            view={view}
                        />

            }
            <Row
                variant={{
                    margin: "40-0"
                }}
            >
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalCount={totalPosts}
                    limit={limit}
                    isPostsLoading={isPostsLoading}
                />
            </Row>
        </>
    );
};

export default PagesPostsList;