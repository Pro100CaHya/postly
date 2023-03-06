import React from "react";
import Content from "../../components/layout/content/Content";

import Main from "../../components/layout/main/Main";
import Users from "../../modules/users/Users";

const UsersPage = () => {
    return (
        <Main>
            <Content title={"Users"}>
                <Users />
            </Content>
        </Main>
    );
};

export default UsersPage;