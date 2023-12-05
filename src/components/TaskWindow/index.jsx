import TaskContainer from "../TaskContainer";
import "./TaskWindow.css";

/**
 * Компонент модального окна при выборе задачи по номеру
 * @param task - объект задачи
 * @param taskModalIsOpen - флаг модального окна
 * @param setTaskModalIsOpen - функция изменения флага модального окна
 */
const TaskWindow = ({ task, taskModalIsOpen, setTaskModalIsOpen }) => {
    return (
        <div className="taskWindowContainer">
            <div className="taskWindowHeaderContainer">
                <div className="taskWindowHeader">
                    <div className="taskWindowRow">
                        Задания КИМ № {task.numberTheme}
                    </div>
                    <div className="taskWindowRow">ОГЭ: {task.theme}</div>
                </div>
                <button
                    className="backButton"
                    onClick={() => setTaskModalIsOpen(!taskModalIsOpen)}>
                    Назад
                </button>
            </div>
            <TaskContainer
                id={task.id}
                description={task.description}
                decision={task.decision}
                answer={task.answer}
                video={task.video}
            />
        </div>
    );
};

export default TaskWindow;
