import Header from "./components/Header";
import Underhead from "./components/Underhead";
import Banks from "./components/Banks";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="appContainer">
            <Header />
            <Underhead />
            <Banks />
            <Footer />
        </div>
    );
}

export default App;
