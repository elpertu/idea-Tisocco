import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"

function App() {
  return (
    <div className="App">
		<NavBar />
		<h1>
			Casa Marthe
		</h1>
		<ItemListContainer />
    </div>
  );
}

export default App;
