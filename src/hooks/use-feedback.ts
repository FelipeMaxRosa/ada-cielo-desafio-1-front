import { useFeedbackContext } from "../contexts/feedback-context";
import { feedbackService } from "../services";

export const useFeedback = () => {
  const { state, dispatch } = useFeedbackContext();

  const submitFeedback = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const feedbackData = {
        feedbackMessage: state.feedbackMessage,
        feedbackType: state.feedbackType,
      };

      await feedbackService.submitFeedback(feedbackData);
      dispatch({ type: "SET_ERROR", payload: "" });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Erro ao submeter feedback" });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return {
    submitFeedback,
    loading: state.loading,
    error: state.error,
  };
};
