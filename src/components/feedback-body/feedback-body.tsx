import React, { useState } from "react";
import { SelectField } from "../shared/select/select-field";
import { FEEDBACK_TYPE_OPTIONS } from "../constants";
import { SelectChangeEvent } from "@mui/material/Select";

export const FeedbackBody = () => {
  const [feedbackType, setFeedbackType] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFeedbackType(event.target.value);
  };

  return (
    <form>
      <SelectField
        items={FEEDBACK_TYPE_OPTIONS}
        value={feedbackType}
        onChange={handleChange}
        label="Que tipo de feedback que voce gostaria de nos deixar?"
        name="feedbackType"
      />
    </form>
  );
};
