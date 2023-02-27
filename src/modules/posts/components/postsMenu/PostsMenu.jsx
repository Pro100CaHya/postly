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

import "./PostsMenu.css";

const PostsMenu = ({ filter, setFilter, limit, setLimit, changeView, paginationType, changePaginationType }) => {
    return (
        <div className="posts__menu">
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
                    <Select
                        options={[
                            {
                                id: 0,
                                value: "title",
                                name: "Title"
                            },
                            {
                                id: 1,
                                value: "body",
                                name: "Body"
                            }
                        ]}
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        defaultValue="Sort by"
                        value={filter.sort}
                        onChange={(sort) => setFilter({ ...filter, sort })}
                    />
                </Column>
                <Column>
                    <Input
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        placeholder={"Search"}
                        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                    />
                </Column>
                <Column
                    variant={{
                        margin: "10-10"
                    }}
                >
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
                            },
                            {
                                id: 2,
                                value: 20,
                                name: 20
                            },
                        ]}
                        variant={{
                            size: "xs",
                            style: "primary"
                        }}
                        defaultValue="Posts on page"
                        value={limit}
                        onChange={(limit) => setLimit(parseInt(limit))}
                    />
                </Column>
                <Column>
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

export default PostsMenu;