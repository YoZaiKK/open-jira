import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ConextProps {
  entries: Entry[]; 
   
  // Methods
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ConextProps);