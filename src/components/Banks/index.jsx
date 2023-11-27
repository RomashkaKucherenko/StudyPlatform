import Button from "../../ui-kit/LinkButton";
import DownArrow from "../../assets/DownArrow";
import "./Banks.css";

const text = [
    "Темы, которые входят в перечень",
    "Как устроен экзамен",
    "Структура вариантов по темам и типам",
];

const BankRow = ({ spanText }) => {
    return (
        <div className="bankRow">
            <DownArrow />
            <span className="banksRowText">{spanText}</span>
        </div>
    );
};

const Banks = () => {
    return (
        <div className="banksContainer">
            <span className="banksTitle">Что важно знать об экзамене?</span>
            <div className="banksContent">
                <div className="bankButtons">
                    <Button
                        to={"/tasks"}
                        width={234}
                        height={58}
                        content={"Банк заданий"}
                    />
                    <Button
                        to={"/theory"}
                        width={234}
                        height={58}
                        content={"Банк теории"}
                    />
                    <Button
                        to={"/"}
                        width={234}
                        height={58}
                        content={"Решить вариант"}
                    />
                </div>
                <div className="bankRows">
                    {text.map((textArray) => (
                        <BankRow spanText={textArray} key={text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banks;
