import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const WelcomePage = React.lazy(() => import("./pages/WelcomePage"));

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>로딩중</div>}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<WelcomePage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
