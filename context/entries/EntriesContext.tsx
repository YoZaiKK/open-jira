import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ConextProps {
  entries: Entry[]; 
}

export const EntriesContext = createContext({} as ConextProps);