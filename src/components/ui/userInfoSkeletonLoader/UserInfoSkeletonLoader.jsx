import React from "react";

import Column from "../layout/column/Column";
import Flex from "../layout/flex/Flex";
import Row from "../layout/row/Row";
import Wrap from "../layout/wrap/Wrap";

import "./UserInfoSkeletonLoader.css"

const UserInfoSkeletonLoader = () => {
    return (
        <div className="user-info-skeleton-loader">
            <Wrap
                variant={{
                    padding: "40-40"
                }}
            >
                <Flex>
                    <Column
                        variant={{
                            margin: "0-20"
                        }}
                    >
                        <div className="user-info-skeleton-loader__avatar"></div>
                    </Column>
                    <Column
                        variant={{
                            margin: "20-0",
                            width: "100pc"
                        }}
                    >
                        <Row
                            variant={{
                                margin: "0-20"
                            }}
                        >
                            <div className="user-info-skeleton-loader__username"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "60-20"
                            }}
                        >
                            <div className="user-info-skeleton-loader__info"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "20-20"
                            }}
                        >
                            <div className="user-info-skeleton-loader__info"></div>
                        </Row>
                        <Row
                            variant={{
                                margin: "20-20"
                            }}
                        >
                            <div className="user-info-skeleton-loader__info"></div>
                        </Row>
                    </Column>
                </Flex>
            </Wrap>
        </div>
    );
};

export default UserInfoSkeletonLoader;