
import './App.css';
import CounterPage from './components/counter/counter-page';
import Generation from './components/greeting/generation';
import Greeting from './components/greeting/greeting';
import { Footer, Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CounterPage />
      {/* <Greeting />
      <Generation />
      <Footer /> */}
    </div>
  );
}

export default App;
