import styled from 'styled-components';

export function App() {
  return (
    <div className="App">
      <Text>Hello world</Text>
    </div>
  );
}


const Text = styled.h1`
  color: red;
  font-size: 50px;
`;