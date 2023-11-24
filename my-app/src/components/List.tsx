/** @format */

import { stateT } from '../App';

type propT = {
  propClbk: (id: number) => void;
  propInfo: stateT[] | null;
};

export function List({ propClbk, propInfo }: propT) {
  return (
    <>
      <div className='container_list'>
        <ul className='list_info'>
          {propInfo?.map((v) => {
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
