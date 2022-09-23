import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Digitalsport from './components/pages/Digitalsport/Digitalsport';
import Categorias from './components/pages/Categorias/Categorias';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar brand={"Digital Sport"} />
      
        <Routes>
          <Route path='/' exact element={<Digitalsport/>}/>
          <Route path='/:categoria' element={<Categorias />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
