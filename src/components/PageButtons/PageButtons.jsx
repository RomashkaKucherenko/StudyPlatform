import { useLocation } from "react-router-dom";
import LinkButton from "../../ui-kit/LinkButton";


/**
 * Компонент с кнопками на страницах: "Банк задач", "Банк теории", "Решить вариант"
 */
const PageButtons = () => {
    const authtorized = false;
    const location = useLocation().pathname;
    return (
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
                to={"/variants"}
                width={234}
                height={58}
                content={"Решить вариант"}
                location={location}
            />
        </div>
    );
};

export default PageButtons;
