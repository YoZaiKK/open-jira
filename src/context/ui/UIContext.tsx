import { createContext } from 'react';

interface ConextProps {
  sidemenuOpen: boolean;
}

export const UIContext = createContext({} as ConextProps);
