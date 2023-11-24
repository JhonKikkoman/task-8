/** @format */

import { stateDetailsT } from '../App';
import ProgressiveImg from './PreLoadImg';
import { img } from './img/img';

type propT = {
  propObj: stateDetailsT | null;
};

export function Details({ propObj }: propT) {
  const preLoad = (
    <>
      <span className='preload'></span>
    </>
  );
  const element = (
    <>
      <ProgressiveImg
        src={propObj?.avatar}
        placeholderSrc={img}
        width='300'
        height='300'
      />
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
