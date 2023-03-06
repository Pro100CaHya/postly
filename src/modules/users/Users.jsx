import React, { useState } from "react";

import UsersMenu from "./components/usersMenu/UsersMenu";
import PagesUsersList from "./components/pagesUsersList/PagesUsersList";
import Row from "../../components/ui/layout/row/Row";
import InfiniteUsersList from "./components/infiniteUsersList/InfiniteUsersList";

const Users = () => {
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [view, setView] = useState("list");
    const [paginationType, setPaginationType] = useState("pages");
    const [limit, setLimit] = useState(5);

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
        <div className="users">
            <Row
                variant={{
                    margin: "0-40"
                }}
            >
                <UsersMenu
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
                        <PagesUsersList
                            limit={limit}
                            view={view}
                            filter={filter}
                        />
                        :
                        <InfiniteUsersList
                            limit={limit}
                            view={view}
                            filter={filter}
                        />
                }
            </Row>
        </div>
    );
};

export default Users;