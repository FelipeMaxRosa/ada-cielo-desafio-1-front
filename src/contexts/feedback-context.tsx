import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useReducer,
} from "react";

interface FeedbackState {
  feedbackType: string;
  feedbackMessage: string;
}

type OnChange = { type: "ONCHANGE"; payload: { name: string; value: string } };
type FeedbackAction = OnChange;

interface IFeedbackProviderProps {
  children: ReactNode;
}

function feedbackReducer(state: FeedbackState, action: FeedbackAction) {
  switch (action.type) {
    case "ONCHANGE": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default:
      return state;
  }
}

const feedbackInitialState: FeedbackState = {
  feedbackMessage: "",
  feedbackType: "",
};

interface IFeedbackContextData {
  state: FeedbackState;
  dispatch: React.Dispatch<FeedbackAction>;
}

export const FeedbackContext = createContext<IFeedbackContextData>(
  {} as IFeedbackContextData
);

export function FeedbackProvider({ children }: IFeedbackProviderProps) {
  const [state, dispatch] = useReducer(feedbackReducer, feedbackInitialState);

  const contextValues = {
    state,
    dispatch,
  };

  return (
    <FeedbackContext.Provider value={contextValues}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedbackContext = () => useContext(FeedbackContext);
