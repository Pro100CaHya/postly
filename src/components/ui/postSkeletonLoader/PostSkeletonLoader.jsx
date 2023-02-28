import React from "react";

import Row from "../layout/row/Row";
import Wrap from "../layout/wrap/Wrap";
import Flex from "../layout/flex/Flex";

import "./PostSkeletonLoader.css";

const PostSkeletonLoader = () => {
    return (
        <div className="post-skeleton-loader">
            <Row
                variant={{
                    margin: "100-40"
                }}
            >
                <div className="post-skeleton-loader__title">
                </div>
            </Row>
            <Row
                variant={{
                    margin: "40-40"
                }}
            >
                <div className="post-skeleton-loader__content">
                    <Wrap
                        variant={{
                            padding: "20-20"
                        }}
                    >
                        <Row
                            variant={{
                                margin: "0-20"
                            }}
                        >
                            <div className="post-skeleton-loader__body"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "20-0"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center"
                                }}
                            >
                                <div className="post-skeleton-loader__author"></div>
                            </Flex>
                        </Row>
                    </Wrap>
                </div>
            </Row>
        </div>
    );
};

export default PostSkeletonLoader;