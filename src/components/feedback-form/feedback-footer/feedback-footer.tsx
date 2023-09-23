import Stack from "@mui/material/Stack";

import { Button } from "../../form";
import { useFeedback } from "../../../hooks";

export const FeedbackFooter = () => {
  const { submitFeedback, loading } = useFeedback();

  return (
    <footer>
      <Stack mt={6}>
        <Button
          variant="contained"
          size="large"
          onClick={submitFeedback}
          disabled={loading}
        >
          Enviar
        </Button>
      </Stack>
    </footer>
  );
};
