import React from 'react';
import { WRAPPER } from '../CONSTANTS';
import './App.scss';
import Raiting from './raiting/Raiting';
import Filter from './filter/Filter'
import Options from './options/Options';
import Rewiev from './rewiev/Rewiev';


function App() {

  

  return (
    <div className="App">
      <div style={WRAPPER}>
        <header className='header'>
          <Raiting raiting_number={3.6} size_of_grade={17} />
          <div className='button-wrapper'>
            <button className='button'>Написать отзыв</button>
          </div>
        </header>
        <main>
          <div>
            <Filter filter_theme={['1asdas', '2fasf', '3asg', '4asg']} />
          </div>
          <div>
            <Options />
          </div>
          <div>
            <Rewiev
              name='Author'
              avatar='E'
              score={5}
              experienceOfUse={5}
              detailsOption={['1', '2']}
              date={new Date()}
              text='ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda
              ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt expli
              cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptat'
              dignity='ed ut perspiciatis unde omnis iste'
              limitations='ed ut perspiciatis unde omnis iste'
              photos={['sdf', 'sdf', 'sdf']}
              like={4}
              dislike={5}
              source='http:sdfsdfsdf'

            />
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;
