import React, { useEffect, useState } from "react";

import Pagination from "../../../../components/ui/pagination/Pagination";
import Row from "../../../../components/ui/layout/row/Row";
import Error from "../../../../components/ui/error/Error";
import PostsItemSkeletonLoader from "../../../../components/ui/postsItemSkeletonLoader/PostsItemSkeletonLoader";

import { useUsers } from "../../../../hooks/useUsers";
import { useFetching } from "../../../../hooks/useFetching";
import { UsersService } from "../../api/UsersService";
import UsersList from "../usersList/UsersList";

const PagesUsersList = ({ limit, filter, view }) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);

    const [fetchUsers, isUsersLoading, usersError] = useFetching(async (limit, page) => {
        const response = await UsersService.getAll(limit, page);

        setUsers(response.data);
        setTotalUsers(parseInt(response.headers["x-total-count"]));
    });

    const filteredUsers = useUsers(users, filter);

    console.log(filteredUsers)

    useEffect(() => {
        if (limit * currentPage > totalUsers && totalUsers !== 0) {
            setCurrentPage(Math.ceil(totalUsers / limit));
        } else {
            fetchUsers(limit, currentPage);
        }
    }, [currentPage, limit]);

    return (
        <>
            {
                usersError
                    ?
                    <Error message={usersError} />
                    :
                    isUsersLoading === true
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
                        <UsersList
                            users={filteredUsers}
                            isUsersLoading={isUsersLoading}
                            usersError={usersError}
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
                    totalCount={totalUsers}
                    limit={limit}
                    isPostsLoading={isUsersLoading}
                />
            </Row>
        </>
    );
};

export default PagesUsersList;