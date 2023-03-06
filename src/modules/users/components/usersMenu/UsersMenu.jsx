import React from "react";

import Flex from "../../../../components/ui/layout/flex/Flex";
import Column from "../../../../components/ui/layout/column/Column";
import Select from "../../../../components/ui/select/Select";
import Input from "../../../../components/ui/input/Input";
import Switch from "../../../../components/ui/switch/Switch";
import ListView from "../../../../components/ui/svg/listView/ListView";
import GridView from "../../../../components/ui/svg/gridView/GridView";
import PagesNav from "../../../../components/ui/svg/pagesNav/PagesNav";
import InfinityNav from "../../../../components/ui/svg/infinityNav/InfinityNav";

import "./UsersMenu.css";

const UsersMenu = ({ paginationType, filter, setFilter, limit, setLimit, changeView, changePaginationType }) => {
    return (
        <div className="users__menu">
            <Flex
                mixin={"users__menu-row"}
                variant={{
                    alignItems: "center"
                }}
            >
                <Column
                    mixin="users__menu-select-sort"
                    variant={{
                        margin: "0-10"
                    }}
                >
                    <Select
                        options={[
                            {
                                id: 0,
                                value: "name",
                                name: "Name"
                            },
                            {
                                id: 1,
                                value: "username",
                                name: "Username"
                            },
                            {
                                id: 2,
                                value: "email",
                                name: "Email"
                            }
                        ]}
                        variant={{
                            size: "xs",
                            style: "primary",
                            width: "full"
                        }}
                        defaultValue="Sort by"
                        value={filter.sort}
                        onChange={(sort) => setFilter({ ...filter, sort })}
                    />
                </Column>
                <Column mixin={"users__menu-search"}>
                    <Input
                        variant={{
                            size: "xs",
                            style: "primary",
                            width: "full"
                        }}
                        placeholder={"Search"}
                        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                    />
                </Column>
                <Column mixin={"users__menu-select-count"}>
                    <Select
                        options={[
                            {
                                id: 0,
                                value: 5,
                                name: 5
                            },
                            {
                                id: 1,
                                value: 10,
                                name: 10
                            }
                        ]}
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        defaultValue="Users on page"
                        value={limit}
                        onChange={(limit) => setLimit(parseInt(limit))}
                        disabled={paginationType === "infinity"}
                    />
                </Column>
                <Column
                    variant={{
                        visible: window.innerWidth > 768
                    }}
                    mixin={"users__menu-switch-view"}
                >
                    <Switch
                        id={"view"}
                        onChange={changeView}
                        leftImg={<ListView />}
                        rightImg={<GridView />}
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        value={filter.value}
                    />
                </Column>
                <Column
                    mixin={"users__menu-switch-pagination"}
                    variant={{
                        margin: "10-0"
                    }}
                >
                    <Switch
                        id={"pagination"}
                        onChange={changePaginationType}
                        leftImg={<PagesNav />}
                        rightImg={<InfinityNav />}
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        value={filter.value}
                    />
                </Column>
            </Flex>
        </div>
    );
};

export default UsersMenu;