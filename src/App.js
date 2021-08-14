import "./App.css";
import { SearchContainer } from "./components/SearchContainer.jsx";

function App() {
  return (
    <div className="App">
      <div style={{ height: "5%" }}>
        <h1>Gthub Username searcher</h1>
      </div>
      <div style={{ height: "95%" }}>
        <SearchContainer />
      </div>
    </div>
  );
}

export default App;
