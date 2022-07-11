import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './components/Data/Context';
import Header from './components/UI/Header';
import Home from './components/Pages/Home';
import Browse from './components/Pages/Browse';
import CheckOut from './components/Pages/CheckOut';
import WarehouseItems from './components/Data/Items';
import './components/Styles/App.css';


function App() {
  
  const [pricesArray, setPricesArray] = useState([]);
  const warehouseItemsArray = WarehouseItems; // userinterface array
  const [checkOutPageArray, setCheckOutPageArray] = useState([]);
  

  // header props to set prices for the amount span.
  const setPricesArrayHandler = (price) => {  
    setPricesArray( (oldPrice) => {
      return [price, ...oldPrice];
    });
  };


  const setCheckOutPageHandler = (returnedObj) => {
      setCheckOutPageArray( (oldObject) => {
        // compare returned object qty with original array objecty.
        return [returnedObj, ...oldObject];
      });    
  };

  return (
    <div className="App">
      <UserContext.Provider value={warehouseItemsArray}>
        <Router>
          <Header pricesArray={pricesArray}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/browse" 
                element={<Browse setPricesArray={setPricesArrayHandler}
                setCheckOutList={setCheckOutPageHandler}/>}/>
              <Route path='/checkout' element={<CheckOut itemsArray={checkOutPageArray}/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;