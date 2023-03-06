import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import Column from "../../../../components/ui/layout/column/Column";
import Flex from "../../../../components/ui/layout/flex/Flex";
import Row from "../../../../components/ui/layout/row/Row";
import Wrap from "../../../../components/ui/layout/wrap/Wrap";
import AvatarSVG from "../../../../components/ui/svg/avatarSVG/AvatarSVG";
import UserSVG from "../../../../components/ui/svg/userSVG/UserSVG";
import EmailSVG from "../../../../components/ui/svg/emailSVG/EmailSVG";

import "./UsersItem.css";

const UsersItem = ({ user, view }) => {
    const navigate = useNavigate();

    const classes = ["users__item"];

    if (view === "grid") {
        classes.push("users__item_view_grid");
    }

    return (
        <li
            className={classes.join(" ")}
            onClick={() => navigate(`/users/${user.id}`)}
        >
            <Flex
                variant={{
                    justifyContent: "space-between",
                }}
                mixin={view === "grid" ? "users__item-content users__item-content_direction_column" : "users__item-content"}
            >
                <Column
                    variant={{
                        margin: "0-10"
                    }}
                    mixin={view === "grid" ? "users__item-column-avatar users__item-column-avatar_view_grid" : "users__item-column-avatar"}
                >
                    <div className={view === "grid" ? "users__item-avatar users__item-avatar_view_grid": "users__item-avatar"}>
                        <Wrap
                            variant={{
                                padding: "30-30"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <AvatarSVG />
                            </Flex>
                        </Wrap>
                    </div>
                </Column>
                <Column
                    variant={{
                        margin: "10-0"
                    }}
                >
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
                            <h2 className="users__item-username">
                                {user.username}
                            </h2>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-10"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Column
                                    variant={{
                                        margin: "0-5"
                                    }}
                                >
                                    <p className="users__item-name">
                                        {user.name}
                                    </p>
                                </Column>
                                <Column
                                    variant={{
                                        margin: "5-0"
                                    }}
                                >
                                    <UserSVG />
                                </Column>
                            </Flex>
                        </Row>
                        <Row
                            variant={{
                                margin: "10-0"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center",
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Column
                                    variant={{
                                        margin: "0-5"
                                    }}
                                >
                                    <p className="users__item-email">
                                        {user.email}
                                    </p>
                                </Column>
                                <Column
                                    variant={{
                                        margin: "5-0"
                                    }}
                                >
                                    <EmailSVG />
                                </Column>
                            </Flex>
                        </Row>
                    </Wrap>
                </Column>
            </Flex>
        </li>
    );
};

export default memo(UsersItem);