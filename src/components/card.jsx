import React from 'react';
import styled from 'styled-components';
import { CARD } from 'utils/const';

const Card = ({ ...card }) => {
  const { postId, email, body } = card.card;
  return (
    <CardContainer>
      <CardCommentId>
        <Title>{CARD.USER_ID}</Title>
        <Contents>{postId}</Contents>
      </CardCommentId>
      <CardEmail>
        <Title>{CARD.EMAIL}</Title>
        <Contents>{email}</Contents>
      </CardEmail>
      <CardComment>
        <Title>{CARD.COMMENT}</Title>
        <Contents>{body}</Contents>
      </CardComment>
    </CardContainer>
  );
};

export default Card;
const CardContainer = styled.div`
  width: 500px;
  height: auto;
  margin: 6px;
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
  margin-right: 12px;
`;
const Contents = styled.div`
  font-size: 18px;
  line-height: 21px;
`;
