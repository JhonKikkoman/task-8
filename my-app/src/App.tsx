/** @format */

import './App.css';
import { List } from './components/List';
import { Details } from './components/Details';
import { useEffect, useState } from 'react';

export type stateT = {
  id: number;
  name: string;
};

export type stateDetailsT = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

function App() {
  const [state, setState] = useState(false);
  const [stateList, setStateList] = useState<stateT[]>([]);
  const [stateDetails, setStateDetails] = useState<stateDetailsT>({
    id: 0,
    name: '',
    avatar: '',
    details: {
      city: '',
      company: '',
      position: '',
    },
  });
  useEffect(() => {
    const fch = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
      );
      if (!response.ok) {
        throw new Error(`Ошибка запроса ${response.statusText}`);
      }
      const result = await response.json();
      setStateList(result);
    };
    fch();
  }, []);

  const listHanlderClick = (id: number) => {
    const fch2 = async () => {
      const response = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
      );
      if (response.ok) {
        setState(true);
      }
      if (!response.ok) {
        throw new Error(`Ошибка ответа ${response.statusText}`);
      }
      const result = await response.json();
      setStateDetails(result);
      setState(false);
    };
    fch2();
  };
  return (
    <>
      <div className='container'>
        <List propClbk={listHanlderClick} propInfo={stateList} />
        {stateDetails.id === 0 ? null : (
          <Details propObj={stateDetails} propBoo={state} />
        )}
      </div>
    </>
  );
}

export default App;
