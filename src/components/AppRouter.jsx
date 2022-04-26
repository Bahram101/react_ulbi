import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../routes";

function AppRouter() {
    const isAuth = true;

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}            
        </Routes>
    )
	// <Route path="/*" element={<Posts />} />
}

export default AppRouter;
