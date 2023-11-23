/** @format */

import './App.css';
import { List } from './components/List';
import { Details } from './components/Details';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const listHanlderClick = (id: number) => {
    setState(id);
  };
  return (
    <>
      <div className='container'>
        <List propClbk={listHanlderClick} />
        <Details propId={state} />
      </div>
    </>
  );
}

export default App;
