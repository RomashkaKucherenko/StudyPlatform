import MainHeader from "../../components/MainHeader";
import MainPageBody from "../../components/MainPageBody";
import Banks from "../../components/Banks";
import Footer from "../../components/Footer";

import './MainPage.css'

const MainPage = () => {
    return (
        <div className="mainPageContainer">
            <MainHeader />
            <MainPageBody />
            <Banks />
            <Footer />
        </div>
    );
};

export default MainPage;
