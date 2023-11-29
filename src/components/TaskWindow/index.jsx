import "./TaskWindow.css";

const TaskWindow = ({ task,taskModalIsOpen,setTaskModalIsOpen }) => {
    return (
        <div className="taskWindowContainer">
            <div className="taskWindowHeaderContainer">
                <div className="taskWindowHeader">
                    <div className="taskWindowRow">
                        Задания КИМ № {task.number}
                    </div>
                    <div className="taskWindowRow">ОГЭ: {task.theme}</div>
                    <div className="taskWindowRow">Всего задач: 30</div>
                </div>
                <button className="backButton" onClick={() => setTaskModalIsOpen(!taskModalIsOpen)}>Назад</button>
            </div>
            <div className="taskWindowContent">
                <div className="taskWindowNumber">{task.id}</div>
                <div className="taskWindowDescription">{task.description}</div>
            </div>
        </div>
    );
};

export default TaskWindow;
