import { FeedbackBody } from "../feedback-body";
import { FeedbackContainer } from "../feedback-container";
import { FeedbackHeader } from "../feedback-header";
import { Container, Divisor } from "./app.styles";

function App() {
  return (
    <Container>
      <FeedbackContainer>
        <FeedbackHeader />
        <Divisor />
        <FeedbackBody />
      </FeedbackContainer>
    </Container>
  );
}

export default App;
