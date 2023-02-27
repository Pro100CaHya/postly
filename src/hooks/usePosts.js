import { useMemo } from "react"

const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === "") {
            return [...posts];
        }

        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }, [posts, sort]);

    return sortedPosts;
}

export const usePosts = (posts, filter) => {
    const sortedPosts = useSortedPosts(posts, filter.sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(
            filter.query.toLowerCase()
        ));
    }, [sortedPosts, filter.query])

    return sortedAndSearchedPosts;
}