import React from "react";
import Flex from "../layout/flex/Flex";
import Wrap from "../layout/wrap/Wrap";
import Row from "../layout/row/Row";

import "./SpinnerLoader.css";

const SpinnerLoader = () => {
    return (
        <div className="spinner-loader">
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
                    <Flex
                        variant={{
                            justifyContent: "center"
                        }}
                    >
                        <div className="spinner-loader__circle-wrap">
                            <div className="spinner-loader__circle"></div>
                        </div>
                    </Flex>
                </Row>
                <Row
                    variant={{
                        margin: "10-0"
                    }}
                >
                    <p className="spinner-loader__text">
                        Loading...
                    </p>
                </Row>
            </Wrap>
        </div>
    );
};

export default SpinnerLoader;