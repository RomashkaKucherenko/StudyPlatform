import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RoboCorner from "../../assets/RoboCorner";
import BankTheoryRow from "../../components/BankTheoryRow";
import LinkButton from "../../ui-kit/LinkButton";

import "./TheoryBank.css";

const TheoryBank = () => {
    const [data, setData] = useState();
    const authtorized = false;
    const location = useLocation().pathname;

    const getThemes = async () => {
        const data = await (
            await axios.get(`http://localhost:3000/themes`)
        ).data;
        setData(data);
    };
    useEffect(() => {
        getThemes();
    }, []);

    return (
        <div className="theoryBankContainer">
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
            <div className="bankTheoryContent">
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
                <div className="bankTheoryRowsContainer">
                    {data &&
                        data.map((content) => (
                            <BankTheoryRow
                                num={content.number}
                                content={content.theme}
                                key={content.theme}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TheoryBank;
