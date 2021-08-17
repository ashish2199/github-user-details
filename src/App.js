import { AppContainer } from "./components/AppContainer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <div style={{ height: "5%", fontSize: "35px", padding: "5px" }}>
        Gthub Username searcher
      </div>
      <div style={{ height: "95%" }}>
        <AppContainer />
      </div>
    </div>
  );
}

export default App;
