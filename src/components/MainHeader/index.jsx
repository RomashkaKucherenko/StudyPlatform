import OGE from "../../assets/OGE";
import tgpi from "../../assets/tgpi.svg";
import "./MainHeader.css";

/**
 * Шапка на главной странице
 */
const MainHeader = () => {
    return (
        <div className="container">
            <div>
                <OGE />
                <img
                    src={tgpi}
                    alt="Загрузка изображения"
                    style={{ marginLeft: 36 }}
                />
            </div>
            <div className="buttonsContainer">
                <button
                    style={{ width: 117, height: 43 }}
                    className="buttonContainer">
                    Войти
                </button>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/OGEMASTEROGE"
                    className="telegramButton">
                    Telegram
                </a>
            </div>
        </div>
    );
};

export default MainHeader;
