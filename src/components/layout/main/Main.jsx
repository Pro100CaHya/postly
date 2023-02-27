import React from "react";

import Container from "../../ui/layout/container/Container";
import Wrap from "../../ui/layout/wrap/Wrap";

import "./Main.css";

const Main = ({ children }) => {
    return (
        <main className="main">
            <Container
                variant={{
                    width: "768px"
                }}
            >
                <Wrap
                    variant={{
                        padding: "20-20"
                    }}
                >
                    {children}
                </Wrap>
            </Container>
        </main>
    );
};

export default Main;