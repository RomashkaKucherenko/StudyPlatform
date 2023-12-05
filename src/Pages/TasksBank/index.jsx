import { useLocation } from "react-router-dom";
import RoboCorner from "../../assets/RoboCorner";
import TaskFinder from "../../components/TaskFinder";
import LinkButton from "../../ui-kit/LinkButton";

import "./TasksBank.css";

const TasksBank = () => {
    const authtorized = false;
    const location = useLocation().pathname;

    return (
        <div className="tasksBankContainer">
            <div className="bankHeader">
                <RoboCorner />
                <LinkButton
                    to={"/"}
                    width={150}
                    height={40}
                    content={"На главную"}
                    location={location}
                />
            </div>

            <div className="tasksBankContent">
                <div className="bankButtonsContainer">
                    <LinkButton
                        to={"/tasks"}
                        width={234}
                        height={58}
                        content={"Банк заданий"}
                        location={location}
                    />
                    <LinkButton
                        to={"/theory"}
                        width={234}
                        height={58}
                        content={"Банк теории"}
                        location={location}
                    />
                    {authtorized && (
                        <LinkButton
                            width={234}
                            height={58}
                            content={"Видео разборы"}
                            location={location}
                        />
                    )}
                    <LinkButton
                        width={234}
                        height={58}
                        content={"Решить вариант"}
                        location={location}
                    />
                </div>
                <TaskFinder />
            </div>
        </div>
    );
};

export default TasksBank;
