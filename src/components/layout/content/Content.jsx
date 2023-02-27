import React from "react";

import Row from "../../ui/layout/row/Row";

import "./Content.css";

const Content = ({ children, title }) => {
    return (
        <div className="content">
            <Row
                variant={{
                    margin: "40-40"
                }}
            >
                <h2 className="content__title">
                    {title}
                </h2>
            </Row>
            <Row
                variant={{
                    margin: "40-0"
                }}
            >
                {children}
            </Row>
        </div>
    );
};

export default Content;