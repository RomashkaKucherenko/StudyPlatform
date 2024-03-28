import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TasksBankPage from "./pages/TasksBankPage";
import TheoryBankPage from "./pages/TheoryBankPage";
import VariantPage from "./pages/VariantPage";
import AuthPage from "./pages/AuthPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import "./App.css";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                {isAuthenticated ? (
                    <Route path="/" element={<MainPage />} />
                ) : (
                    <Route path="/" element={<AuthPage />} />
                )}
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/tasks" element={<TasksBankPage />} />
                <Route path="/theory" element={<TheoryBankPage />} />
                <Route path="/variants" element={<VariantPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
