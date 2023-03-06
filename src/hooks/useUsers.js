import { useMemo } from "react"

const useSortedUsers = (users, sort) => {
    const sortedUsers = useMemo(() => {
        if (sort === "") {
            return [...users];
        }

        return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    }, [users, sort]);

    return sortedUsers;
}

export const useUsers = (users, filter) => {
    const sortedUsers = useSortedUsers(users, filter.sort);

    const sortedAndSearchedUsers = useMemo(() => {
        return sortedUsers.filter((user) => user.username.toLowerCase().includes(
            filter.query.toLowerCase()
        ));
    }, [sortedUsers, filter.query])

    return sortedAndSearchedUsers;
}