import api from "./api";
import { URL } from "./constants";
import { Feedback } from "../models/interfaces";

interface FeedbackData {
  feedbackMessage: string;
  feedbackType: string;
}
function submitFeedback(feedbackData: FeedbackData) {
  return api.post<Feedback[]>(URL.FEEDBACK, feedbackData);
}

export { submitFeedback };
