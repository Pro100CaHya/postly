import React from "react";

import Wrap from "../../ui/layout/wrap/Wrap";
import Flex from "../../ui/layout/flex/Flex";
import Column from "../../ui/layout/column/Column";
import PostlySVG from "../../ui/svg/postlySVG/PostlySVG";
import Nav from "../../nav/Nav";

import "./Header.css";
import Button from "../../ui/button/Button";
import ProfileSVG from "../../ui/svg/profileSVG/ProfileSVG";

const Header = () => {
    return (
        <header className="header">
            <Wrap
                mixin={"header__wrap"}
                variant={{
                    padding: "10-60"
                }
                }
            >
                <Flex
                    variant={{
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Column
                        variant={{
                            margin: "0-10"
                        }}
                    >
                        <div className="header__logo">
                            <Flex
                                variant={{
                                    alignItems: "center"
                                }}
                            >
                                <PostlySVG />
                                <h2 className="header__title">
                                    Postly
                                </h2>
                            </Flex>
                        </div>
                    </Column>
                    <Column>
                        <Nav
                            links={
                                [
                                    {
                                        id: 0,
                                        path: "/posts",
                                        name: "Posts"
                                    },
                                    {
                                        id: 1,
                                        path: "/users",
                                        name: "Users"
                                    },
                                    {
                                        id: 2,
                                        path: "/about",
                                        name: "About"
                                    }
                                ]
                            }
                        />
                    </Column>
                    <Column
                        variant={{
                            margin: "10-0"
                        }}
                    >
                        <Button
                            variant={{
                                size: "0",
                                style: "transparent"
                            }}
                        >
                            <ProfileSVG />
                        </Button>
                    </Column>
                </Flex>
            </Wrap>
        </header>
    );
};

export default Header;