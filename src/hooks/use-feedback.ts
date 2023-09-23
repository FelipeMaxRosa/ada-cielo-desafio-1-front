import { useState } from "react";
import { useFeedbackContext } from "../contexts/feedback-context";
import { feedbackService } from "../services";

export const useFeedback = () => {
  const { state } = useFeedbackContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitFeedback = async () => {
    try {
      setLoading(true);
      const feedbackData = {
        feedbackMessage: state.feedbackMessage,
        feedbackType: state.feedbackType,
      };

      await feedbackService.submitFeedback(feedbackData);
      setError("");
    } catch (error) {
      setError("Erro ao submeter feedback");
    } finally {
      setLoading(false);
    }
  };

  return {
    submitFeedback,
    loading,
    error,
  };
};
