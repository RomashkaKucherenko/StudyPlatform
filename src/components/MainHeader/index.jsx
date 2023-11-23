import OGE from "../../assets/OGE";
import Button from "../../ui-kit/Button";
import tgpi from "../../assets/tgpi.svg";
import "./MainHeader.css";

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
                <Button width={117} height={43} content={"Войти"} />
                <Button width={117} height={43} content={"Telegram"} />
            </div>
        </div>
    );
};

export default MainHeader;