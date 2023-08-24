
import './App.css';
import CounterPage from './components/counter/counter-page';
import Generation from './components/greeting/generation';
import Greeting from './components/greeting/greeting';
import { Footer, Navbar } from './components/navbar/navbar';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path='/' element={ <Greeting />} />
         <Route path='/generation' element={<Generation /> } />
         <Route path='/counter' element={<CounterPage /> } />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
