import React, { useEffect, useRef, useState } from "react";

import Wrap from "../../ui/layout/wrap/Wrap";
import Flex from "../../ui/layout/flex/Flex";
import Column from "../../ui/layout/column/Column";
import PostlySVG from "../../ui/svg/postlySVG/PostlySVG";
import Nav from "../../nav/Nav";
import Button from "../../ui/button/Button";
import ProfileSVG from "../../ui/svg/profileSVG/ProfileSVG";

import "./Header.css";

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
    const buttonMenu = useRef();

    useEffect(() => {
        buttonMenu.current.addEventListener("click", () => {
            setIsOpened((prev) => !prev);
        });
    }, []);

    return (
        <header className={isOpened ? "header header_opened" : "header"}>
            <div className="header__content">
                <Wrap
                    mixin={"header__wrap"}
                    variant={{
                        padding: "10-60"
                    }}
                >
                    <Flex
                        mixin={"header__row"}
                        variant={{
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Column
                            variant={{
                                margin: "0-10"
                            }}
                            mixin={"header__column-button-menu"}
                        >
                            <Button
                                ref={buttonMenu}
                                mixin={"header__button-menu"}
                                variant={{
                                    size: "0",
                                    style: "transparent"
                                }}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Button>
                        </Column>
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
                        <Column mixin={isOpened ? "header__column-nav header__column-nav_opened" : "header__column-nav"}>
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
            </div>
        </header>
    );
};

export default Header;