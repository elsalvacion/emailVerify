import EmailState from "./context/EmailState";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./layout/Header";
import Content from "./layout/Content";

function App() {
  return (
    <EmailState>
      <Header />
      <Container>
        <Content />
      </Container>
    </EmailState>
  );
}

export default App;
