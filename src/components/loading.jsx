import React from 'react';
import styled from 'styled-components';
export const Loading = () => {
  return <LoadingDiv>Loading...</LoadingDiv>;
};
export default Loading;

const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 70px;
  transform: translate(-50%, -50%);
`;
