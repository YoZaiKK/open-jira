import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;

    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void; 
    setIsAddingEntry: (isAddingEntry: boolean) => void;
}


export const UIContext = createContext({} as ContextProps );

