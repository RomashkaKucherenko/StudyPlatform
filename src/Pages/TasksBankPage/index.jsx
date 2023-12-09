import { useLocation } from "react-router-dom";
import PageButtons from "../../components/PageButtons/PageButtons";
import RoboCorner from "../../assets/RoboCorner";
import TaskFinder from "../../components/TaskFinder";
import LinkButton from "../../ui-kit/LinkButton";

import "./TasksBankPage.css";

const TasksBankPage = () => {
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
                <PageButtons/>
                <TaskFinder />
            </div>
        </div>
    );
};

export default TasksBankPage;
