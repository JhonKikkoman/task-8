/** @format */

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

export type propT = {
  propClbk: (id: number) => void;
  propInfo: stateT[] | null;
};
