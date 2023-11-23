import RoboCorner from "../../assets/RoboCorner";
import BankButtons from "../../components/BankButtons";
import BankTheoryRow from "../../components/BankTheoryRow";
import Button from "../../ui-kit/Button";

import "./TheoryBank.css";

import { themes } from "./mock";

const TheoryBank = () => {
    return (
        <div className="theoryBankContainer">
            <div className="bankHeader">
                <RoboCorner />
                <Button width={117} height={40} content={"Назад"} />
            </div>
            <div className="bankTheoryContent">
                <BankButtons />
                <div className="bankTheoryRowsContainer">
                    {themes.map((theme) => (
                        <BankTheoryRow content={theme} key={theme} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheoryBank;
