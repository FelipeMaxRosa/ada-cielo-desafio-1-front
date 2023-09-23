import Stack from "@mui/material/Stack";

import { Button } from "../form";
import { useFeedback } from "../../hooks";

export const FeedbackFooter = () => {
  const { submitFeedback } = useFeedback();

  return (
    <footer>
      <Stack mt={6}>
        <Button variant="contained" size="large" onClick={submitFeedback}>
          Enviar
        </Button>
      </Stack>
    </footer>
  );
};
