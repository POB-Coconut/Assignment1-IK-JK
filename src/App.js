import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import CardList from './components/cardList';

function App() {
  return (
    <AppDiv>
      <GlobalStyles />
      <CardList />
    </AppDiv>
  );
}

export default App;
const AppDiv = styled.div`
  display: flex;
  justify-content: center;
`;
