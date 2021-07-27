import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import request from '../data/api';
import Card from './card';
const CardList = () => {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    const fetchData = request();
    fetchData.then((res) => setCardData(res));
  }, []);

  return (
    <CardListContainer>
      {cardData?.map((card) => (
        <Card key={card.id} {...{ card }} />
      ))}
    </CardListContainer>
  );
};
export default CardList;

const CardListContainer = styled.div``;
