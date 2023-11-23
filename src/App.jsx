import MainPage from "./Pages/MainPage";
import TasksBank from './Pages/TasksBank'
import TheoryBank from './Pages/TheoryBank'
import "./App.css";

function App() {
    return (
        <div className="appContainer">
            {/* <MainPage /> */}
            <TasksBank/>
            {/* <TheoryBank/> */}
        </div>
    );
}

export default App;
