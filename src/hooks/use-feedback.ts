import { useFeedbackContext } from "../contexts/feedback-context";

export const useFeedback = () => {
  const { state } = useFeedbackContext();

  return {
    onFeedbackSubmit: () => {},
  };
};
