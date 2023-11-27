import OGE from "../../assets/OGE";
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
                <button style={{width: 117, height:43}} className="buttonContainer" >Войти</button>
                <button style={{width: 117, height:43}} className="buttonContainer">Telegram</button>
            </div>
        </div>
    );
};

export default MainHeader;
