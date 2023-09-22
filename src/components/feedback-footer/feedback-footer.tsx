import { FC } from "react";

import Stack from "@mui/material/Stack";
import { Button } from "../form";

interface FeedbackFooterProps {
  onClick: () => void;
}

export const FeedbackFooter: FC<FeedbackFooterProps> = ({ onClick }) => {
  return (
    <footer>
      <Stack mt={6}>
        <Button variant="contained" size="large" onClick={onClick}>
          Enviar
        </Button>
      </Stack>
    </footer>
  );
};
