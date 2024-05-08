/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const contactListStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const contactCardStyle = css`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  min-width: 80%;

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

function ContactList() {
  return (
    <div css={contactListStyle}>
        <div css={contactCardStyle}>
          <h2>Contact 1</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 2</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 1</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 2</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 1</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 2</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 1</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 2</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 1</h2>
          <p>Test</p>
        </div>
        <div css={contactCardStyle}>
          <h2>Contact 2</h2>
          <p>Test</p>
        </div>
    </div>
  );
}

export default ContactList;
