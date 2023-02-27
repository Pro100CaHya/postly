import React from "react";

import Column from "../../../components/ui/layout/column/Column";
import Row from "../../../components/ui/layout/row/Row";
import Wrap from "../../../components/ui/layout/wrap/Wrap";
import Flex from "../../../components/ui/layout/flex/Flex";
import ProfileSVG from "../../../components/ui/svg/profileSVG/ProfileSVG";

import "./PostCommentsItem.css";

const PostCommentsItem = ({ comment }) => {
    return (
        <li className="post__comment">
            <Wrap
                variant={{
                    padding: "10-10"
                }}
            >
                <Flex>
                    <Column
                        variant={{
                            margin: "0-10"
                        }}
                    >
                        <ProfileSVG />
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
                            <h2 className="post__comment-name">
                                {comment.name}
                            </h2>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-10"
                            }}
                        >
                            <i className="post__comment-email">
                                {comment.email}
                            </i>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-0"
                            }}
                        >
                            <p className="post__comment-body">
                                {comment.body}
                            </p>
                        </Row>
                    </Column>
                </Flex>
            </Wrap>
        </li>
    );
};

export default PostCommentsItem;