import RoboCorner from "../../assets/RoboCorner";

import "./TasksBank.css";
import TaskFinder from "../../components/TaskFinder";
import LinkButton from "../../ui-kit/LinkButton";

const TasksBank = () => {
    const authtorized = false;

    return (
        <div className="tasksBankContainer">
            <div className="bankHeader">
                <RoboCorner />
                <LinkButton
                    to={"/"}
                    width={150}
                    height={40}
                    content={"На главную"}
                />
            </div>

            <div className="tasksBankContent">
                <div className="bankButtonsContainer">
                    <LinkButton
                        to={"/tasks"}
                        width={234}
                        height={58}
                        content={"Банк заданий"}
                    />
                    <LinkButton
                        to={"/theory"}
                        width={234}
                        height={58}
                        content={"Банк теории"}
                    />
                    {authtorized && (
                        <LinkButton
                            width={234}
                            height={58}
                            content={"Видео разборы"}
                        />
                    )}
                    <LinkButton
                        width={234}
                        height={58}
                        content={"Решить вариант"}
                    />
                </div>
                <div>
                    <TaskFinder />
                </div>
            </div>
        </div>
    );
};

export default TasksBank;
