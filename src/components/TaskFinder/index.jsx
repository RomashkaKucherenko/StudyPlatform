import { useEffect, useState } from "react";
import TaskWindow from "../TaskWindow";
import ThemeWindow from "../ThemeWindow";
import axios from "axios";

import "./TaskFinder.css";

const TaskFinder = () => {
    const [inputValue, setInputValue] = useState("");
    // Состояние после поиска конкретной задачи
    const [task, setTask] = useState();
    // Состояние для хранения задач по теме
    const [tasksByTheme, setTasksByTheme] = useState();
    // Состояние селектора
    const [theme, setTheme] = useState();
    // Список тем
    const [themesList, setThemesList] = useState();
    // Флаги для открытия модальных окон
    const [taskModalIsOpen, setTaskModalIsOpen] = useState(false);
    const [themeModalIsOpen, setThemeModalIsOpen] = useState(false);

    const getTask = async () => {
        const data = await (
            await axios.get(`http://localhost:3000/tasks/${inputValue}`)
        ).data;
        setTask(data);
        setTaskModalIsOpen(!taskModalIsOpen);
    };

    const getThemesList = async () => {
        const data = await (
            await axios.get(`http://localhost:3000/themes`)
        ).data;
        setThemesList(data);
    };

    const getTasksByTheme = async () => {
        const data = await (
            await axios.get(`http://localhost:3000/tasks/?numberTheme=${theme}`)
        ).data;
        setTasksByTheme(data);
        setThemeModalIsOpen(!themeModalIsOpen);
    };

    useEffect(() => {
        getThemesList();
    }, []);

    return (
        <div className="taskFinderContainer">
            <div className="findTitle">Поиск по номеру</div>
            <div className="finderByNumber">
                <input
                    id="numberTaskInput"
                    className="finderByNumberInput"
                    type="number"
                    min={1}
                    placeholder="Номер задачи"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                    className="finderByNumberButton"
                    onClick={() => getTask()}>
                    Показать задачу
                </button>
            </div>
            <div className="findTitle">Поиск по типу</div>
            <div className="finderByType">
                <select
                    id="typeTaskSelector"
                    className="finderSelect"
                    onChange={(e) => setTheme(e.target.value)}>
                    <option selected disabled>
                        Выберите тип задания
                    </option>
                    {themesList &&
                        themesList.map((content) => (
                            <option
                                value={content.number}
                                id={content.number}
                                key={content.number}>
                                {content.number}. {content.theme}
                            </option>
                        ))}
                </select>
                <button
                    className="finderByNumberButton"
                    onClick={() => getTasksByTheme()}>
                    Найти все задачи
                </button>
                {task && taskModalIsOpen && (
                    <TaskWindow
                        task={task}
                        taskModalIsOpen={taskModalIsOpen}
                        setTaskModalIsOpen={setTaskModalIsOpen}
                    />
                )}
                {tasksByTheme && themeModalIsOpen && (
                    <ThemeWindow
                        tasksByTheme={tasksByTheme}
                        themeModalIsOpen={themeModalIsOpen}
                        setThemeModalIsOpen={setThemeModalIsOpen}
                    />
                )}
            </div>
        </div>
    );
};

export default TaskFinder;
