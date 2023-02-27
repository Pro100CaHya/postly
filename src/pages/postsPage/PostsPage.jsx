import React from "react";
import Content from "../../components/layout/content/Content";

import Main from "../../components/layout/main/Main";
import Posts from "../../modules/posts/Posts";

const PostsPage = () => {
    return (
        <Main>
            <Content title={"Posts"}>
                <Posts />
            </Content>
        </Main>
    );
};

export default PostsPage;