import React from "react";

import Column from "../../../../components/ui/layout/column/Column";
import Flex from "../../../../components/ui/layout/flex/Flex";
import Row from "../../../../components/ui/layout/row/Row";
import Wrap from "../../../../components/ui/layout/wrap/Wrap";
import EmailSVG from "../../../../components/ui/svg/emailSVG/EmailSVG";
import HandsetSVG from "../../../../components/ui/svg/handsetSVG/HandsetSVG";
import ProfileSVG from "../../../../components/ui/svg/profileSVG/ProfileSVG";
import UserSVG from "../../../../components/ui/svg/userSVG/UserSVG";

import "./UserInfo.css";

const UserInfo = ({ user }) => {
    return (
        <div className="user__info">
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
                        <ProfileSVG
                            size={{
                                width: 128,
                                height: 128
                            }}
                        />
                    </Column>
                    <Column
                        variant={{
                            margin: "20-0"
                        }}
                    >
                        <Row
                            variant={{
                                margin: "0-20"
                            }}
                        >
                            <h2 className="user__name">
                                {user.username}
                            </h2>
                        </Row>
                        <Row
                            variant={{
                                margin: "60-20"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center"
                                }}
                            >
                                <Column
                                    variant={{
                                        margin: "0-20"
                                    }}
                                >
                                    <UserSVG />
                                </Column>
                                <Column
                                    variant={{
                                        margin: "20-0"
                                    }}
                                >
                                    <span className="user__fullname">
                                        {user.fullname}
                                    </span>
                                </Column>
                            </Flex>
                        </Row>
                        <Row
                            variant={{
                                margin: "20-20"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center"
                                }}
                            >
                                <Column
                                    variant={{
                                        margin: "0-20"
                                    }}
                                >
                                    <EmailSVG />
                                </Column>
                                <Column
                                    variant={{
                                        margin: "20-0"
                                    }}
                                >
                                    <span className="user__email">
                                        {user.email}
                                    </span>
                                </Column>
                            </Flex>
                        </Row>
                        <Row
                            variant={{
                                margin: "20-20"
                            }}
                        >
                            <Flex
                                variant={{
                                    alignItems: "center"
                                }}
                            >
                                <Column
                                    variant={{
                                        margin: "0-20"
                                    }}
                                >
                                    <HandsetSVG />
                                </Column>
                                <Column
                                    variant={{
                                        margin: "20-0"
                                    }}
                                >
                                    <span className="user__phone">
                                        {user.phone}
                                    </span>
                                </Column>
                            </Flex>
                        </Row>
                    </Column>
                </Flex>
            </Wrap>
        </div>
    );
};

export default UserInfo;