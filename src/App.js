import "./App.css";
import Series from "./components/series";
import Grafico from "./components/grafico";
function App(props) {
  return (
    <div>
      <Series data={props.data} lang={props.lang} />
      <Grafico data={props.data} />
    </div>
  );
}

export default App;
