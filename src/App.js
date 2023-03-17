import "./App.css";
import Card from "./component/Card";
import CardContext from "./context/CardContext";

function App() {
  return (
    <CardContext>
      {" "}
      <Card />
    </CardContext>
  );
}

export default App;
