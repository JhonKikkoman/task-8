/** @format */

import { useEffect, useState } from 'react';
import { stateDetailsT } from '../App';
import { imgPlaceHolder } from './img/img';

type propT = {
  propObj: stateDetailsT;
};

export function Details({ propObj }: propT) {
  const [imgSrc, setStateImg] = useState(imgPlaceHolder);
  useEffect(() => {
    const img = new Image();
    img.src = `https://i.pravatar.cc/300?img=${propObj.id}`;
    img.onload = () => {
      setStateImg(img.src);
    };
  }, [propObj.id]);
  return (
    <>
      <div className='container_info'>
        <img
          src={imgSrc}
          alt='avatar'
          className={`container_img_${
            imgPlaceHolder && imgSrc === imgPlaceHolder ? 'loading' : 'loaded'
          }`}
        />
        <span className='person_info person_name'>{propObj?.name}</span>
        <span className='person_info'>{`City: ${propObj?.details.city}`}</span>
        <span className='person_info'>{`Company: ${propObj?.details.company}`}</span>
        <span className='person_info'>{`Position: ${propObj?.details.position}`}</span>
      </div>
    </>
  );
}
