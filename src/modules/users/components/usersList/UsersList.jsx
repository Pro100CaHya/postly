import React from "react";

import UsersItem from "../usersItem/UsersItem";

import "./UsersList.css";

const UsersList = ({ users, view }) => {
    const classes = ["users__list"];

    if (view === "grid") {
        classes.push("users__list_view_grid");
    }

    return (
        <ul
            className={classes.join(" ")}
        >
            {
                users.map((user) =>
                    <UsersItem
                        key={user.id}
                        user={user}
                        view={view}
                    />
                )
            }
        </ul>
    );
};

export default UsersList;