import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TasksBankPage from "./pages/TasksBankPage";
import TheoryBankPage from "./pages/TheoryBankPage";
import "./App.css";
import VariantPage from "./pages/VariantPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/tasks" element={<TasksBankPage />} />
                <Route path="/theory" element={<TheoryBankPage />} />
                <Route path="/variants" element={<VariantPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
