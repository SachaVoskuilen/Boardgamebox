import { WindowStateType } from '@/types';
import { create } from 'zustand';

type SetWindowStates = {
  updateWindow: (windowSize: WindowStateType['windowSize']) => void;
};

export const useWindowState = create<WindowStateType & SetWindowStates>((set) => ({
  windowSize: {
    width: 0,
    height: 0,
    orientation: '',
  },
  updateWindow: (windowSize) => set({ windowSize }),
}));
