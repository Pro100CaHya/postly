import React from "react";

import Flex from "../layout/flex/Flex";
import Button from "../button/Button";
import Column from "../layout/column/Column";

import { DOTS, usePagination } from "../../../modules/posts/hooks/usePagination";

const Pagination = ({ setCurrentPage, currentPage, totalCount, limit, isPostsLoading }) => {
    const paginationRange = usePagination({
        totalCount,
        pageSize: limit,
        siblingCount: 1,
        currentPage
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    const onFirst = () => {
        setCurrentPage(1);
    }

    const onLast = () => {
        setCurrentPage(lastPage);
    }

    const onNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const onPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="pagination">
            <Flex
                variant={{
                    alignItems: "center"
                }}
            >
                <Column
                    variant={{
                        margin: "0-5"
                    }}
                >
                    <Button
                        variant={{
                            size: "32-32",
                            style: `${currentPage === 1 || isPostsLoading ? "secondary-disabled" : "secondary"}`
                        }}
                        onClick={onFirst}
                        disabled={currentPage === 1 || isPostsLoading}
                    >
                        {"<<"}
                    </Button>
                </Column>
                <Column
                    variant={{
                        margin: "5-5"
                    }}
                >
                    <Button
                        variant={{
                            size: "32-32",
                            style: `${currentPage === 1 || isPostsLoading ? "secondary-disabled" : "secondary"}`
                        }}
                        onClick={onPrevious}
                        disabled={currentPage === 1 || isPostsLoading}
                    >
                        {"<"}
                    </Button>
                </Column>
                {
                    paginationRange.map((pageNumber) => {
                        if (pageNumber.value === DOTS) {
                            return (
                                <Column
                                    key={pageNumber.id}
                                    variant={{
                                        margin: "5-5"
                                    }}
                                >
                                    <div>{pageNumber.value}</div>
                                </Column>
                            );
                        }

                        return (
                            <Column
                                key={pageNumber}
                                variant={{
                                    margin: "5-5"
                                }}
                            >
                                <Button
                                    variant={{
                                        size: "32-32",
                                        style: `${
                                            isPostsLoading
                                                ?
                                                    "secondary-disabled"
                                                :
                                                    currentPage === pageNumber
                                                        ? "secondary-active"
                                                        : "secondary"
                                        }`
                                    }}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    disabled={pageNumber === currentPage || isPostsLoading}
                                >
                                    {pageNumber}
                                </Button>
                            </Column>
                        );
                    })
                }
                <Column
                    variant={{
                        margin: "5-5"
                    }}
                >
                    <Button
                        variant={{
                            size: "32-32",
                            style: `${currentPage === lastPage || isPostsLoading ? "secondary-disabled" : "secondary"}`
                        }}
                        onClick={onNext}
                        disabled={currentPage === lastPage || isPostsLoading}
                    >
                        {">"}
                    </Button>
                </Column>
                <Column
                    variant={{
                        margin: "5-0"
                    }}
                >
                    <Button
                        variant={{
                            size: "32-32",
                            style: `${currentPage === lastPage || isPostsLoading ? "secondary-disabled" : "secondary"}`
                        }}
                        onClick={onLast}
                        disabled={currentPage === lastPage || isPostsLoading}
                    >
                        {">>"}
                    </Button>
                </Column>
            </Flex>
        </div >
    );
};

export default Pagination;