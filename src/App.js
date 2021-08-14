import { AppContainer } from "./components/AppContainer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ height: "5%" }}>
        <h1>Gthub Username searcher</h1>
      </div>
      <div style={{ height: "95%" }}>
        <AppContainer />
      </div>
    </div>
  );
}

export default App;
