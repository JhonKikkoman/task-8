/** @format */

import { useEffect, useState } from 'react';

type propT = {
  propId: number;
};

type stateT = {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

export function Details({ propId }: propT) {
  const [state, setState] = useState<stateT | null>(null);
  console.log(state);

  useEffect(() => {
    try {
      if (propId !== 0) {
        const fch = async () => {
          const response = await fetch(
            `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${propId}.json`
          );
          const result = await response.json();
          setState(result);
        };
        fch();
      }
    } catch (error) {
      throw new Error(`Ошибка ответа ${error}`);
    }
  }, [propId]);

  const preLoad = (
    <>
      <span className='preload'>Loading...</span>
    </>
  );
  const element = (
    <>
      <img src={state?.avatar} alt='' className='container_img' />
      <span className='person_info person_name'>{state?.name}</span>
      <span className='person_info'>{`City:${state?.details.city}`}</span>
      <span className='person_info'>{`Company:${state?.details.company}`}</span>
      <span className='person_info'>{`Position:${state?.details.position}`}</span>
    </>
  );

  return (
    <>
      <div className='container_info'>{state === null ? preLoad : element}</div>
    </>
  );
}
