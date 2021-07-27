import Card from "./components/card";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
function App() {
	return (
		<AppDiv>
			<GlobalStyles />
			<Card />
		</AppDiv>
	);
}

export default App;
const AppDiv = styled.div`
	display: flex;
	justify-content: center;
`;
