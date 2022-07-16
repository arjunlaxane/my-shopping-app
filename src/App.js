import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
