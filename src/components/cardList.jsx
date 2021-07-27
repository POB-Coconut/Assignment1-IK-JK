import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import request from '../data/api';
import Card from './card';
import { useInfiniteScroll } from './infiniteScrollList';

const CardList = () => {
  const [cardData, setCardData] = useState();
  const [target, setTarget] = useState(null);
  const page = 1;
  const loadData = (page) => {
    const fetchData = request(page);
    fetchData.then((res) => setCardData(res));
  };
  const loadMoreData = () => {
    page += 1;
    const fetchData = request(page);
    fetchData.then((res) => setCardData(res));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <CardListContainer>
      {cardData?.map((card) => (
        <Card key={card.id} {...{ card }} />
      ))}
      <div ref={setTarget}></div>
    </CardListContainer>
  );
};
export default CardList;

const CardListContainer = styled.div``;
