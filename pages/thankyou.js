// import Link from 'next/link';
import { css } from '@emotion/react';
import Link from 'next/link';
import Header from '../components/Header';

const thankYou = css`
  text-align: center;
  position: relative;
  margin-top: 200px;
  margin-left: 800px;
  top: 50%;
  bottom: 50%;
  width: 10%;

  h1 {
    font-size: 100px;
    font-family: 'Irish Grover', cursive;
    margin-top: -20vh;
    margin-left: -15vw;
    text-align: 50px;
    position: relative;
  }
`;
export default function thank() {
  return (
    <div>
      <Header />
      <div css={thankYou}>
        <h1>Thank you!</h1>
        <h3>Please come again</h3>
      </div>
    </div>
  );
}
