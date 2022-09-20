import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Digitalsport from './components/paginas/Digitalsport';
import Items from './components/paginas/Items';




function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Inicio/>}/>
          <Route path='/digitalsport' element={<Digitalsport/>}/>
          <Route path='/items' element={<Items/>}/>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
