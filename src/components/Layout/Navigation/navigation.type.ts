import { Dispatch, SetStateAction } from 'react';
import { windowSizeType } from '..';

export interface NavigationType {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
  windowSize: windowSizeType;
}
