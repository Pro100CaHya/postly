import React from "react";

import Column from "../../../components/ui/layout/column/Column";
import Flex from "../../../components/ui/layout/flex/Flex";
import Row from "../../../components/ui/layout/row/Row";
import Wrap from "../../../components/ui/layout/wrap/Wrap";
import UserSVG from "../../../components/ui/svg/userSVG/UserSVG";

import "./PostContent.css";

const PostContent = ({post}) => {
    return (
        <>
            <Row
                variant={{
                    margin: "40-40"
                }}
            >
                <h2 className="post__title">
                    {post.title}
                </h2>
            </Row>
            <Row
                variant={{
                    margin: "40-40"
                }}
            >
                <div className="post__content">
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
                            <p className="post__body">
                                {post.body}
                            </p>
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
                                <Column
                                    variant={{
                                        margin: "0-10"
                                    }}
                                >
                                    <UserSVG />
                                </Column>
                                <Column
                                    variant={{
                                        margin: "0-10"
                                    }}
                                >
                                    <span className="post__author">
                                        Alexey
                                    </span>
                                </Column>
                            </Flex>
                        </Row>
                    </Wrap>
                </div>
            </Row>
        </>
    );
};

export default PostContent;