import VK from "../../assets/VK";
import TG from "../../assets/TG";
import YouTube from "../../assets/YouTube";
import MapMarker from "../../assets/MapMarker";
import logo from "../../assets/logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogoConteiner">
        <img src={logo} alt="Загрузка изображения" />
      </div>
      <div className="media">
        <div>
          <div className="map">
            <MapMarker />
            <div className="tgpiText">
              <span>Таганрогский институт</span>
              <span> имени А.П. Чехова</span>
            </div>
          </div>
          <div className="socials">
            <a href="https://vk.com/club223548230">
              <VK />
            </a>
            <a href="https://t.me/OGEMASTEROGE">
              <TG />
            </a>
            <a href="https://www.youtube.com/@user-Sergei_Donskikh">
              <YouTube />
            </a>
          </div>
        </div>
        <div className="footerText">
          <span>"Учиться никогда не поздно,</span>
          <span> и стать умным никогда не рано!"</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
