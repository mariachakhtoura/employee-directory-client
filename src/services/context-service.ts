import { createContext } from 'react';
import { IDialog } from '../components/dialog/model';

interface IContext {
  dialog: IDialog;
}

const INITIAL_STATE: IContext = {
  dialog: {
    open: false,
    toggleOpen: () => {}
  }
}

export const Context = createContext<IContext>(INITIAL_STATE);