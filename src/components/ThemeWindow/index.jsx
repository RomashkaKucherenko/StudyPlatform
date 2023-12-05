import TaskContainer from "../TaskContainer";

import "./ThemeWindow.css";

/**
 * Компонент модального окна при выборе задачи по типу
 * @param tasksByTheme - объект темы
 * @param themeModalIsOpen - флаг модального окна
 * @param setThemeModalIsOpen - функция изменения флага модального окна
 */
const ThemeWindow = ({
    tasksByTheme,
    themeModalIsOpen,
    setThemeModalIsOpen,
}) => {
    return (
        <div className="themeWindowContainer">
            <div className="themeWindowHeaderContainer">
                <div className="themeWindowHeader">
                    <div className="themeWindowRow">
                        Задания КИМ № {tasksByTheme[0].numberTheme}
                    </div>
                    <div className="themeWindowRow">
                        ОГЭ: {tasksByTheme[0].theme}
                    </div>
                    <div className="themeWindowRow">Всего задач: {tasksByTheme.length}</div>
                </div>
                <button
                    className="backButton"
                    onClick={() => setThemeModalIsOpen(!themeModalIsOpen)}>
                    Назад
                </button>
            </div>
            <div className="themeWindowContent">
                {tasksByTheme.map((task) => {
                    return (
                        <TaskContainer
                            id={task.id}
                            description={task.description}
                            key={task.id}
                            decision={task.decision}
                            answer={task.answer}
                            video={task.video}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ThemeWindow;
