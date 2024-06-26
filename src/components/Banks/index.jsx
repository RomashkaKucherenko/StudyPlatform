import LinkButton from "../../ui-kit/LinkButton";
import DownArrow from "../../assets/DownArrow";

import "./Banks.css";

const text = [
    "Темы, которые входят в перечень",
    "Как устроен экзамен",
    "Структура вариантов по темам и типам",
];


/**
 * Строки в секции кнопок банков на главной странице
 */
const BankRow = ({ spanText }) => {
    return (
        <div className="bankRow">
            <DownArrow />
            <span className="banksRowText">{spanText}</span>
        </div>
    );
};

/**
 * Секция кнопок банков на главной странице
 */
const Banks = () => {
    return (
        <div className="banksContainer">
            <span className="banksTitle">Что важно знать об экзамене?</span>
            <div className="banksContent">
                <div className="bankButtons">
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
                    <LinkButton
                        to={"/variants"}
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
