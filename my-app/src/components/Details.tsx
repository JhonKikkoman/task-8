/** @format */

import { stateDetailsT } from '../App';

type propT = {
  propObj: stateDetailsT | null;
};

export function Details({ propObj }: propT) {
  const preLoad = (
    <>
      <span className='preload'>Loading...</span>
    </>
  );
  const element = (
    <>
      <img src={propObj?.avatar} alt='' className='container_img' />
      <span className='person_info person_name'>{propObj?.name}</span>
      <span className='person_info'>{`City:${propObj?.details.city}`}</span>
      <span className='person_info'>{`Company:${propObj?.details.company}`}</span>
      <span className='person_info'>{`Position:${propObj?.details.position}`}</span>
    </>
  );

  return (
    <>
      <div className='container_info'>
        {propObj === null ? preLoad : element}
      </div>
    </>
  );
}
