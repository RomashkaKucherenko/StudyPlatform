import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageButtons from "../../components/PageButtons/PageButtons";
import RoboCorner from "../../assets/RoboCorner";
import BankTheoryRow from "../../components/BankTheoryRow";
import LinkButton from "../../ui-kit/LinkButton";

import "./TheoryBankPage.css";

const TheoryBankPage = () => {
    const [data, setData] = useState();
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
                <PageButtons />
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

export default TheoryBankPage;
