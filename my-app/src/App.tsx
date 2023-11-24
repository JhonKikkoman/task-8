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

// const dataFetch = async (url: string, id = null) => {
//   let result;
//   try {
//     const response = await fetch(url);
//     result = await response.json();
//   } catch (error) {
//     return new Error(`Ошибка ${error}`);
//   }
//   return result;
// };

function App() {
  const [stateList, setStateList] = useState<stateT[] | null>(null);
  const [stateDetails, setStateDetails] = useState<stateDetailsT | null>(null);
  const [stateId, setStateId] = useState(0);
  useEffect(() => {
    const fch = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
        );
        const result = await response.json();
        setStateList(result);
      } catch (error) {
        throw new Error(`Ошибка запроса ${error}`);
      }
    };
    fch();

    return () => {
      console.log('hello');
    };
  }, []);

  useEffect(() => {
    try {
      const fch = async () => {
        if (stateId !== 0) {
          const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${stateId}.json`
          );
          const result = await response.json();
          setStateDetails(result);
        }
      };
      fch();
    } catch (error) {
      throw new Error(`Ошибка ответа ${error}`);
    }
  }, [stateId]);

  const listHanlderClick = (id: number) => {
    setStateId(id);
  };
  return (
    <>
      <div className='container'>
        <List propClbk={listHanlderClick} propInfo={stateList} />
        <Details propObj={stateDetails} />
      </div>
    </>
  );
}

export default App;
