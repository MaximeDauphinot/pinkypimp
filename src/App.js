import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Container from './Container/Container';

const App = props => {
  const [idContainer, setIdContainer] = useState(0);

   const menuHandler = (index) => {
    setIdContainer(index)
  }

  return (
    <div className="App">
        <Header handler={menuHandler}/>
        <Container index={idContainer}/>
    </div>
  );
}

export default App;
