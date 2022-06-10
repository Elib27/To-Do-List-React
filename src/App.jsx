import ToDoList from "./components/ToDoList";
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <ToDoList />
    </Container>
  );
}

export default App;
