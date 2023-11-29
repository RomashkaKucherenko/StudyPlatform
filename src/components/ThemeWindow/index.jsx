import "./ThemeWindow.css";

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
                        Задания КИМ № {tasksByTheme[0].number}
                    </div>
                    <div className="themeWindowRow">
                        ОГЭ: {tasksByTheme[0].theme}
                    </div>
                    <div className="themeWindowRow">Всего задач: 30</div>
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
                        <div className="themeRow" key={task.id}>
                            <div className="themeWindowNumber">{task.id}</div>
                            <div className="taskWindowDescription">
                                {task.description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ThemeWindow;
