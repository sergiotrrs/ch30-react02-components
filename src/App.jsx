
import './App.css';
import Generation from './components/greeting/generation';
import Greeting from './components/greeting/greeting';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <Generation />
      {/*  footer */}
    </div>
  );
}

export default App;
