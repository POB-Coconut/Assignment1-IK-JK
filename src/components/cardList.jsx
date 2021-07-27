import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "card";
import request from "../data/api";
const CardList = () => {
	const [commentData, setCommentData] = useState();
	useEffect(() => {
		const fetchData = request();
		fetchData.then((res) => setCommentData(res));
	}, []);
	console.log("데이터;", commentData);
	return (
		<CardListContainer>
			<Card {...{}} />
		</CardListContainer>
	);
};
export default CardList;

const CardListContainer = styled.div``;
