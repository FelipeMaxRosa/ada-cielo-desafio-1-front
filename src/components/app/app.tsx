import { FeedbackContainer } from "../feedback-container/feedback-container";
import { FeedbackHeader } from "../feedback-header/feedback-header";
import { Container } from "./app.styles";

function App() {
  return (
    <Container>
      <FeedbackContainer>
        <FeedbackHeader />
        <hr />
      </FeedbackContainer>
    </Container>
  );
}

export default App;
