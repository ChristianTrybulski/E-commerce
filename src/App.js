import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar brand={"Digital Sport"} />
      
        <Routes>

          <Route path='/' exact element={<ItemListContainer greeting={"Bienvenido a Digital Sport"} />}/>
          <Route path='/category/:categoryId' exact element={<ItemListContainer />}/>
          <Route path='/item/:id' exact element={<ItemDetailContainer />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
