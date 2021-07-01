import React from 'react';
import styled from "styled-components";

const WrapperSectionFirstText = styled.section`
  background-color: #fff;
  height: 115px;
  width: 100%;
  max-width: 100%;
`

const TextSectionFirst = styled.p`
  font-size: 3rem;
  color: #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
`

const FirstSectionText = () => {
    return (
        <WrapperSectionFirstText>
            <TextSectionFirst>TEXT</TextSectionFirst>
        </WrapperSectionFirstText>
    );
};

export default FirstSectionText;