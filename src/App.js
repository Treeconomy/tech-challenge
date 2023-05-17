import ProjectsList from "components/projects/ProjectsList";
import "./App.css";
import Header from "./components/header/Header";

const App = () => (
    <div className="container main-content">
        <Header />
        <ProjectsList />
    </div>
);

export default App;
