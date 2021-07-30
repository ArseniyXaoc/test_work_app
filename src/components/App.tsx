import React from 'react';
import './App.scss';
import Raiting from './raiting/Raiting';

function App() {
  return (
    <div className="App">
      <header><Raiting raiting_number = {2.6} size_of_grade={17}/> <button className='button'>Написать отзыв</button> </header>
      
    </div>
  );
}

export default App;
