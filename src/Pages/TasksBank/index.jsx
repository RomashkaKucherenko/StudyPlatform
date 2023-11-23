import BankButtons from "../../components/BankButtons";
import RoboCorner from "../../assets/RoboCorner";
import Button from "../../ui-kit/Button";

import "./TasksBank.css";
import TaskFinder from "../../components/TaskFinder";

const TasksBank = () => {
    return (
        <div className="tasksBankContainer">
            <div className="bankHeader">
                <RoboCorner />
                <Button width={117} height={40} content={"Назад"} />
            </div>

            <div className="bankTheoryContent">
                <BankButtons />
                <div>
                    <TaskFinder/>
                </div>
            </div>
        </div>
    );
};

export default TasksBank;
