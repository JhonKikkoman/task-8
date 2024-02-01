/** @format */

import './App.css';
import { List } from './components/List';
import { Details } from './components/Details';
import { useEffect, useState } from 'react';
import { stateDetailsT, stateT } from './components/models/models';

function App() {
  const [status, setStatus] = useState(false);
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

  const listHanlderClick = async (id: number) => {
    setStatus(true);
    const response = await fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    );
    if (!response.ok) {
      throw new Error(`Ошибка`);
    }
    setStatus(false);
    const result = await response.json();
    setStateDetails(result);
  };
  return (
    <>
      <div className='container'>
        <List propClbk={listHanlderClick} propInfo={stateList} />
        {stateDetails.id !== 0 && (
          <Details propObj={stateDetails} propBoo={status} />
        )}
      </div>
    </>
  );
}

export default App;
