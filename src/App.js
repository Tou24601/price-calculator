import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import ServicesList from "./components/ServicesList";
import Select from "./components/Select";
import Button from "./components/Button";
import Data from "./data/db.json"

function App() {
  const request = async () => {
    try {
      const response = await fetch ("http://api.nbp.pl/api/exchangerates/rates/a/chf/");
      const finalResponse = await response.json();
      console.log(finalResponse)
    } catch(err) {
      console.log("Hello world")
    }
  }
  return (
    <div className="App">
      <Header />
      <ServicesList />
    </div>
  );
}

export default App;
