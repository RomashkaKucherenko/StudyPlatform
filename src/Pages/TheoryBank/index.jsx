import RoboCorner from "../../assets/RoboCorner";
import BankTheoryRow from "../../components/BankTheoryRow";
import LinkButton from "../../ui-kit/LinkButton";

import "./TheoryBank.css";

import { themes } from "./mock";

const TheoryBank = () => {
    const authtorized = false;
    return (
        <div className="theoryBankContainer">
            <div className="bankHeader">
                <RoboCorner />
                <LinkButton
                    to={"/"}
                    width={150}
                    height={40}
                    content={"На главную"}
                />
            </div>
            <div className="bankTheoryContent">
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
