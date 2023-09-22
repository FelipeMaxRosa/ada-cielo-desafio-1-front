import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

import { SelectField, Form } from "../form";
import { FEEDBACK_TYPE_OPTIONS } from "../constants";
import { Input } from "../form";

export const FeedbackBody = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFeedbackType(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedbackMessage(event.target.value);
  };

  return (
    <Form>
      <SelectField
        items={FEEDBACK_TYPE_OPTIONS}
        value={feedbackType}
        onChange={handleChange}
        label="Que tipo de feedback que voce gostaria de nos deixar?"
        name="feedbackType"
      />
      <Input
        multiline
        rows={6}
        name="feedbackMessage"
        value={feedbackMessage}
        label="Deixe seu feedback aqui:"
        onChange={handleInputChange}
      />
    </Form>
  );
};
