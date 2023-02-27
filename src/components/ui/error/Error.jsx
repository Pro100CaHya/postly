import React from "react";
import Row from "../layout/row/Row";
import Wrap from "../layout/wrap/Wrap";

import "./Error.css";

const Error = ({ message }) => {
    return (
        <div className="error">
            <Wrap
                variant={{
                    padding: "10-10"
                }}
            >
                <Row
                    variant={{
                        margin: "0-10"
                    }}
                >
                    <h2 className="error__title">
                        Ooops 😢 Error
                    </h2>
                </Row>
                <Row
                    variant={{
                        margin: "10-0"
                    }}
                >
                    <p className="error__body">
                        {message}
                    </p>
                </Row>
            </Wrap>
        </div>
    );
};

export default Error;