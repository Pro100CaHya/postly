import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/layout/header/Header";
import PostsPage from "./pages/postsPage/PostsPage";
import { routes } from "./routes/routes";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route
                    index
                    element={<PostsPage />}
                />
                {
                    routes.map((route) =>
                        <Route
                            exact
                            key={route.id}
                            path={route.path}
                            element={route.element}
                        />
                    )
                }
            </Routes>
        </div>
    );
}

export default App;
