import React from "react";
import Row from "../layout/row/Row";
import Wrap from "../layout/wrap/Wrap";

import "./PostsItemSkeletonLoader.css";

const PostsItemSkeletonLoader = () => {
    return (
        <div className="posts-item-skeleton-loader">
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
                    <div className="posts-item-skeleton-loader__title"></div>
                </Row>
                <Row
                    variant={{
                        margin: "10-0"
                    }}
                >
                    <div className="posts-item-skeleton-loader__body"></div>
                </Row>
            </Wrap>
        </div>
    );
};

export default PostsItemSkeletonLoader;