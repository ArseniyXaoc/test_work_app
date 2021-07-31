import React from 'react';
import { WRAPPER } from '../CONSTANTS';
import './App.scss';
import Raiting from './raiting/Raiting';
import Filter from './filter/Filter'

function App() {
  return (
    <div className="App">
      <div style={WRAPPER}>
        <header className='header'>
          <Raiting raiting_number={2.6} size_of_grade={17} />
          <div className='button-wrapper'>
            <button className='button'>Написать отзыв</button>
          </div>
        </header>
        <main>
          <div style={WRAPPER}>
            <Filter filter_theme = {['1asdas','2fasf','3asg','4asg']}/>
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
