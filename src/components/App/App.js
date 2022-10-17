import React from "react";
import './App.css';

import Header from '../Header/Header';
import ProductContainer from '../Product/ProductContainer';
import TableContainer from "../Table/TableContainer";
import GraphContainer from '../Graph/GraphContainer';
function App() {

  return (
    <div className="grid">
    <div className="header">
      <Header />
    </div>
    <div className="product">
      <ProductContainer />
    </div>
    <div className="graph">
      <GraphContainer />
    </div>
    <div className="table">
      <TableContainer />
    </div>
    
  </div>
  );
}

export default App;
