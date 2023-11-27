import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TaskBank from "./pages/TasksBank";
import TheoryBank from "./pages/TheoryBank";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/tasks" element={<TaskBank />} />
                <Route path="/theory" element={<TheoryBank />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
