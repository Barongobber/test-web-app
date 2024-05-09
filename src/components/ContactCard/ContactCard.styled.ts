/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ContactCards = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  min-width: 20%;

  @media screen and (min-width: 800px) {
    width: 50%;
}

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;
