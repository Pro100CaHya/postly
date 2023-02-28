import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../../hooks/useFetching";
import { UserService } from "./api/UserService";

import Row from "../../components/ui/layout/row/Row";
import UserInfo from "./components/UserInfo/UserInfo";
import UserInfoSkeletonLoader from "../../components/ui/userInfoSkeletonLoader/UserInfoSkeletonLoader";
import Error from "../../components/ui/error/Error";
import UserPosts from "./components/UserPosts/UserPosts";
import PostsItemSkeletonLoader from "../../components/ui/postsItemSkeletonLoader/PostsItemSkeletonLoader";

const User = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    const [fetchUser, isUserLoading, userError] = useFetching(async () => {
        const response = await UserService.getUser(params.id);
        setUser({
            username: response.data.username,
            fullname: response.data.name,
            email: response.data.email,
            phone: response.data.phone
        });
    });

    const [fetchUserPosts, isUserPostsLoading, userPostsError] = useFetching(async () => {
        const response = await UserService.getUserPosts(params.id);
        setUserPosts(response.data);
    });

    useEffect(() => {
        const fetching = async () => {
            await fetchUser();
            await fetchUserPosts();
        }

        fetching();
    }, []);

    return (
        <>
            {
                userError
                    ?
                    <Error />
                    :
                    isUserLoading || user.username === undefined
                        ?
                        <Row
                            variant={{
                                margin: "100-40"
                            }}
                        >
                            <UserInfoSkeletonLoader />
                        </Row>
                        :
                        <div className="user">
                            <Row
                                variant={{
                                    margin: "100-40"
                                }}
                            >
                                <UserInfo user={user} />
                            </Row>
                            <Row
                                variant={{
                                    margin: "40-0"
                                }}
                            >
                                <h2 className="post__comment-title">
                                    Posts by {user.username}
                                </h2>
                                {
                                    userPostsError
                                        ?
                                        <Error />
                                        :
                                        isUserPostsLoading
                                            ?
                                            [0, 1].map((loader) =>
                                                <Row
                                                    variant={{
                                                        margin: "20-20"
                                                    }}
                                                    key={loader}
                                                >
                                                    <PostsItemSkeletonLoader />
                                                </Row>
                                            )
                                            :
                                            <UserPosts userPosts={userPosts} />
                                }
                            </Row>
                        </div>
            }
        </>
    );
};

export default User;