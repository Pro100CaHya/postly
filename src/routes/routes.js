import PostsPage from "../pages/postsPage/PostsPage";
import UsersPage from "../pages/usersPage/UsersPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import PostPage from "../pages/postPage/PostPage";

export const routes = [
    {
        id: 0,
        path: "/",
        element: <PostsPage />
    },
    {
        id: 1,
        path: "/posts",
        element: <PostsPage />
    },
    {
        id: 2,
        path: "/posts/:id",
        element: <PostPage />
    },
    {
        id: 3,
        path: "/users",
        element: <UsersPage />
    },
    {
        id: 4,
        path: "/about",
        element: <AboutPage />
    }
]