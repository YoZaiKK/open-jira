import { createContext } from "react";

interface ConextProps {
	sidemenuOpen: boolean;

	//Methods
	closeSideMenu: () => void;
	openSideMenu: () => void;
}

export const UIContext = createContext({} as ConextProps);
