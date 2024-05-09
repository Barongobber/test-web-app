/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const PokemonCardWrapper = styled.div`
    width: 20%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    @media screen and (min-width: 800px) {
        width: 50%;
    }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  .card h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 16px;
    color: #666;
  }
`;
