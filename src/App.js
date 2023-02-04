import "./App.css";
import Categories from "./components/categories/Categories";
import Headline from "./components/headline/Headline";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Headline />
      <Navigation />
      <Categories />
    </div>
  );
}

export default App;
