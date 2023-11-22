import Quote from "../Quote";
import RoboTop from "../../assets/RoboTop";
import "./Underhead.css";
import Button from "../../ui-kit/Button";

const Underhead = () => {
    return (
        <div className="underheadContainer">
            <div className="topPart">
                <Quote />
                <Button width={187} height={65} content={"Задание дня"} />
            </div>
            <RoboTop />
        </div>
    );
};

export default Underhead;
