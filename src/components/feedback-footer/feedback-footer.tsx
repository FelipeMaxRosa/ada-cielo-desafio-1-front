import Stack from "@mui/material/Stack";

import { Button } from "../form";

export const FeedbackFooter = () => {
  const handleSubmitClick = () => {};

  return (
    <footer>
      <Stack mt={6}>
        <Button variant="contained" size="large" onClick={handleSubmitClick}>
          Enviar
        </Button>
      </Stack>
    </footer>
  );
};
