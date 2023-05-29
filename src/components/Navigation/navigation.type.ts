import { Dispatch, SetStateAction } from 'react';
import { windowSizeType } from '../Layout';

export interface NavigationType {
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
  windowSize: windowSizeType;
}
