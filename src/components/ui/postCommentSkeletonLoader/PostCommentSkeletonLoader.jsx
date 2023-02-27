import React from "react";

import Column from "../../../components/ui/layout/column/Column";
import Row from "../../../components/ui/layout/row/Row";
import Wrap from "../../../components/ui/layout/wrap/Wrap";
import Flex from "../../../components/ui/layout/flex/Flex";

import "./PostCommentSkeletonLoader.css";

const PostCommentSkeletonLoader = () => {
    return (
        <li className="post-comment-skeleton-loader">
            <Wrap
                variant={{
                    padding: "20-20"
                }}
            >
                <Flex>
                    <Column
                        variant={{
                            margin: "0-10"
                        }}
                    >
                        <div className="post-comment-skeleton-loader__avatar"></div>
                    </Column>
                    <Column
                        variant={{
                            margin: "10-0"
                        }}
                    >
                        <Row
                            variant={{
                                margin: "0-10"
                            }}
                        >
                            <div className="post-comment-skeleton-loader__name"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-10"
                            }}
                        >
                            <div className="post-comment-skeleton-loader__email"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-0"
                            }}
                        >
                            <div className="post-comment-skeleton-loader__body"></div>
                        </Row>
                    </Column>
                </Flex>
            </Wrap>
        </li>
    );
};

export default PostCommentSkeletonLoader;