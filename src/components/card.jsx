import React from "react";
import styled from "styled-components";

const Card = () => {
	return (
		<CardContainer>
			<CardCommentId>
				<Title>Comment Id</Title>
				<Contents>sosdkjflksdhfklhl</Contents>
			</CardCommentId>
			<CardEmail>
				<Title>Email</Title>
				<Contents>slkdf@abfkshdfl.co.kr</Contents>
			</CardEmail>
			<CardComment>
				<Title>Comment</Title>
				<Contents>klsdhflkdfhglkh</Contents>
			</CardComment>
		</CardContainer>
	);
};

export default Card;
const CardContainer = styled.div`
	width: 500px;
	height: auto;
	box-sizing: border-box;
	background-color: #f8f9fa;
	color: #212529;
	border: 0.5px solid #ced4da;
	border-radius: 20px;
	font-family: SFProDisplay;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const CardCommentId = styled.div`
	display: flex;
`;
const CardEmail = styled.div`
	display: flex;
	padding-top: 10px;
`;
const CardComment = styled.div`
	display: flex;
	padding-top: 10px;
	flex-direction: column;
`;
const Title = styled.div`
	font-size: 18px;
	line-height: 21px;
	font-weight: bold;
	margin-right: 20px;
`;
const Contents = styled.div`
	font-size: 18px;
	line-height: 21px;
`;
