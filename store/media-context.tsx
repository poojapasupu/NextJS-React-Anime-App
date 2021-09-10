import { createContext, Dispatch, useContext, useReducer } from "react";
import { Page } from "../interfaces";

const MediaContext = createContext<{
  pageArray: Page[];
  dispatch: Dispatch<{ type: string; page: Page }>;
}>({
  pageArray: [],
  dispatch: () => {},
});

const mediaReducer = (state: Page[], action: { type: string; page: Page }) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.page];
    }
    default:
      return state;
  }
};

export const MediaContextProvider: React.FC<{}> = (props) => {
  const defaultState = [];

  const [state, dispatch] = useReducer(mediaReducer, defaultState);

  return (
    <MediaContext.Provider value={{ pageArray: state, dispatch }}>
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContext;

export const useMediaContext = () => useContext(MediaContext);
