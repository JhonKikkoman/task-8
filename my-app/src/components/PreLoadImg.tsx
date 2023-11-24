/** @format */

import { useEffect, useState } from 'react';

type imgT = {
  placeholderSrc?: string;
  src?: string;
  width: string;
  height: string;
};

const ProgressiveImg = ({ placeholderSrc, src, ...props }: imgT) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded';

  useEffect(() => {
    const img = new Image();
    if (src !== undefined) {
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
    }
  }, [src]);

  return (
    <img
      {...{ src: src, ...props }}
      alt=''
      className={`container_img_${customClass}`}
    />
  );
};
export default ProgressiveImg;
