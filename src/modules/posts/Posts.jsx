import React, { useEffect, useState } from "react";

import PostsMenu from "./components/postsMenu/PostsMenu";
import PagesPostsList from "./components/pagesPostsList/PagesPostsList";
import Row from "../../components/ui/layout/row/Row";
import InfinitePostsList from "./components/infinitePostsList/InfinitePostsList";

const Posts = () => {
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [view, setView] = useState("list");
    const [paginationType, setPaginationType] = useState("pages");
    const [limit, setLimit] = useState(10);

    const changeView = (isGridView) => {
        if (isGridView === true) {
            setView("grid");
        } else {
            setView("list");
        }
    }

    const changePaginationType = (isInfinityNav) => {
        if (isInfinityNav === true) {
            setPaginationType("infinity");
        } else {
            setPaginationType("pages")
        }
    }

    return (
        <div className="posts">
            <Row
                variant={{
                    margin: "0-40"
                }}
            >
                <PostsMenu
                    filter={filter}
                    setFilter={setFilter}
                    limit={limit}
                    setLimit={setLimit}
                    changeView={changeView}
                    paginationType={paginationType}
                    changePaginationType={changePaginationType}
                />
            </Row>
            <Row
                variant={{
                    margin: "40-40"
                }}
            >
                {
                    paginationType === "pages"
                        ?
                        <PagesPostsList
                            limit={limit}
                            view={view}
                            filter={filter}
                        />
                        :
                        <InfinitePostsList
                            limit={limit}
                            view={view}
                            filter={filter}
                        />
                }
            </Row>
        </div>
    );
};

export default Posts;