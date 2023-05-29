import { Dispatch, SetStateAction } from 'react';

export interface NavigationType {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
}
