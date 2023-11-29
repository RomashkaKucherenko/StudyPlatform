import axios from "axios";
import { useState } from "react";
import RoboCorner from "../../assets/RoboCorner";
import BankTheoryRow from "../../components/BankTheoryRow";
import LinkButton from "../../ui-kit/LinkButton";


import "./TheoryBank.css";


const TheoryBank = () => {
    const [data, setData] = useState()
    const authtorized = false;

    const getThemes = async() => {
        const data = await (await axios.get(`http://localhost:3000/themes`)).data
        setData(data)
    }

    getThemes()

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
                    {data && data.map((content) => (
                        <BankTheoryRow num={content.number} content={content.theme} key={content.theme} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TheoryBank;
