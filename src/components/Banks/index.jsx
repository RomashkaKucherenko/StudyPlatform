import Button from "../../ui-kit/Button";
import DownArrow from "../../assets/DownArrow";
import "./Banks.css";

const BankRow = ({ buttonText, spanText }) => {
    return (
        <div className="bankRow">
            <Button width={234} height={58} content={buttonText} />
            <div className="banksRow">
                <DownArrow />
                <span className="banksRowText">{spanText}</span>
            </div>
        </div>
    );
};

const Banks = () => {
    const text = [
        ["Банк заданий", "Темы, которые входят в перечень"],
        ["Банк теории", "Как устроен экзамен"],
        ["Решить вариант", "Структура вариантов по темам и типам"],
    ];
    return (
        <div className="banksContainer">
            <span className="banksTitle">Что важно знать об экзамене?</span>
            <div className="banksContent">
                {text.map((textArray) => (
                    <BankRow
                        buttonText={textArray[0]}
                        spanText={textArray[1]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banks;
