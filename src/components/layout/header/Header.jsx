import React, { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import Wrap from "../../ui/layout/wrap/Wrap";
import Flex from "../../ui/layout/flex/Flex";
import Column from "../../ui/layout/column/Column";
import PostlySVG from "../../ui/svg/postlySVG/PostlySVG";
import Nav from "../../nav/Nav";
import Button from "../../ui/button/Button";

import "./Header.css";
import DarkThemeSVG from "../../ui/svg/darkThemeSVG/DarkThemeSVG";
import LightThemeSVG from "../../ui/svg/lightThemeSVG/LightThemeSVG";

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);
    const {darkMode, setDarkMode} = useContext(DarkModeContext);

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
                                mixin={isOpened ? "header__button-menu header__button-menu_active": "header__button-menu"}
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
                                onClick={() => setDarkMode((prev) => !prev)}
                                variant={{
                                    size: "0",
                                    style: "transparent"
                                }}
                            >
                                {
                                    darkMode === true
                                        ?
                                        <DarkThemeSVG />
                                        :
                                        <LightThemeSVG />
                                }
                            </Button>
                        </Column>
                    </Flex>
                </Wrap>
            </div>
        </header>
    );
};

export default Header;