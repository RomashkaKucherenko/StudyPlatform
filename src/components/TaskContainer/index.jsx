import { useState } from "react";
import "./TaskContainer.css";

/**
 * Контейнер задач, который открывается при выборе задачи или задач по темам
 * @param id - id задачи
 * @param description - текст задачи
 * @param answer - ответ
 * @param decision - решение
 * @param video - ссылка на видеоразбор
 */
const TaskContainer = ({ id, description, answer, decision, video }) => {
    const [answerState, setAnswerState] = useState(false)
    const [decisionState, setDecisionState] = useState(false)

    return (
        <div className="taskContainerContent">
            <div className="mainContent">
                <div className="taskContainerNumber">{id}</div>
                <div className="taskContainerDescription">{description}</div>
            </div>
            <div className="optionContainer">
                <button onClick={() => setAnswerState(!answerState)} className="taskOption">Ответ</button>
                <button onClick={() => setDecisionState(!decisionState)} className="taskOption">Решение</button>
                <a href={video} rel="noreferrer" target="_blank" className="taskOption">Видеоразбор</a>
            </div>
            {answerState && <div className="optionContent">Ответ: {answer}</div>}
            {decisionState && <div className="optionContent">Решение: {decision}</div>}
        </div>
    );
};

export default TaskContainer;
