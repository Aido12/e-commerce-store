import { css } from '@emotion/react';
import Link from 'next/link';
import Header from '../components/Header';

const mainPage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -100px;

  h1 {
    font-size: 200px;
    font-family: 'Irish Grover', cursive;
  }

  a {
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin: auto;
    margin-top: -100px;

    background-color: #92c391;
    font-size: 50px;
    font-family: 'Irish Grover', cursive;
    border-radius: 15px;
    padding: 10px 10px;
  }
`;
export default function home() {
  return (
    <div>
      <Header />
      <div css={mainPage}>
        <h1>Welcome!</h1>

        <div>
          <Link href="/products">
            <a>view our products</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
