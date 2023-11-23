/** @format */

import { useEffect, useState } from 'react';

type stateT = {
  id: number;
  name: string;
};

type propT = {
  propClbk: (id: number) => void;
};

export function List({ propClbk }: propT) {
  const [state, setState] = useState<stateT[] | null>(null);
  useEffect(() => {
    const fch = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
        );
        const result = await response.json();
        setState(result);
      } catch (error) {
        throw new Error(`Ошибка запроса ${error}`);
      }
    };
    fch();

    return () => {
      console.log('hello');
    };
  }, []);

  return (
    <>
      <div className='container_list'>
        <ul className='list_info'>
          {state?.map((v) => {
            return (
              <li
                key={v.id}
                className='list_item'
                onClick={() => propClbk(v.id)}
              >
                {v.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
