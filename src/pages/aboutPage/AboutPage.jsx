import React from "react";
import Content from "../../components/layout/content/Content";

import Main from "../../components/layout/main/Main";
import About from "../../modules/about/About";

const AboutPage = () => {
    return (
        <Main>
            <Content title={"About"}>
                <About />
            </Content>
        </Main>
    );
};

export default AboutPage;