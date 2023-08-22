
import './App.css';
import Generation from './components/greeting/generation';
import Greeting from './components/greeting/greeting';

function App() {
  return (
    <div className="App">
      {/*  Agregar NavBar */}
      <Greeting />
      <Generation />
      {/*  footer */}
    </div>
  );
}

export default App;
