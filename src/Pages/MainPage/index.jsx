import MainHeader from "../../components/MainHeader";
import Underhead from "../../components/Underhead";
import Banks from "../../components/Banks";
import Footer from "../../components/Footer";

import './MainPage.css'

const MainPage = () => {
    return (
        <div className="mainPageContainer">
            <MainHeader />
            <Underhead />
            <Banks />
            <Footer />
        </div>
    );
};

export default MainPage;
