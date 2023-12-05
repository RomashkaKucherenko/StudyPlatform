import Quote from "../Quote";
import RoboTop from "../../assets/RoboTop";
import "./MainPageBody.css";

/**
 * Основа на главной странице
 */
const MainPageBody = () => {
    return (
        <div className="MainPageBodyContainer">
            <div className="topPart">
                <Quote />
                <button className="taskOfDayButton">Задание дня</button>
            </div>
            <RoboTop />
        </div>
    );
};

export default MainPageBody;
