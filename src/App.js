import Theme from "./theme";
import Home from "./views/Home";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Theme>
        <Main />
      </Theme>
    </div>
  );
}

export default App;
