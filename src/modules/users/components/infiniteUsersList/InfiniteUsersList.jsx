import React, { useEffect, useState, useRef } from "react";

import UsersList from "../usersList/UsersList";
import Row from "../../../../components/ui/layout/row/Row";
import Error from "../../../../components/ui/error/Error";
import SpinnerLoader from "../../../../components/ui/spinnerLoader/SpinnerLoader";

import { useUsers } from "../../../../hooks/useUsers";
import { useFetching } from "../../../../hooks/useFetching";
import { UsersService } from "../../api/UsersService";
import { useObserver } from "../../../../hooks/useObserver";

const InfinitePostsList = ({ limit, filter, view }) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [fetchUsers, isUsersLoading, usersError] = useFetching(async (limit, page) => {
        const response = await UsersService.getAll(limit, page);

        setUsers([...users, ...response.data]);
        setTotalPages(Math.ceil(parseInt(response.headers["x-total-count"]) / limit));
    });
    const filteredUsers = useUsers(users, filter);
    const lastElem = useRef();

    useObserver(lastElem, currentPage < totalPages, isUsersLoading, () => {
        setCurrentPage(currentPage + 1);
    })

    useEffect(() => {
        fetchUsers(limit, currentPage)
    }, [limit, currentPage]);

    return (
        <>
            {
                usersError
                    ?
                    <Error message={usersError} />
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
                    margin: "20-0"
                }}
            >
                {
                    isUsersLoading
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