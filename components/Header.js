import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  height: 120px;
  display: flex;
  background-color: #92c391;
  justify-content: space-around;

  header {
    font-size: 50px;
    font-family: 'Irish Grover', cursive;
    text-align: 100px;
    position: relative;
    top: 20px;
  }

  img {
    margin-top: 10px;
  }

  nav {
    padding: 10px 30px;
    border-radius: 30px;
    font-family: 'Irish Grover', cursive;
    font-size: 20px;
    font-weight: 900;
    gap: 10px;
  }
`;

export default function header() {
  return (
    <div css={headerStyles}>
      <img
        src="/images/headerpic.png"
        alt="headerpic"
        width="100px"
        height="100px"
      />
      <header>The Irish Craft Whiskey Store</header>
      {/* <img
        src="/images/headerpic.png"
        alt="headerpic"
        width="100px"
        height="100px"
      /> */}
      <nav>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/products">
          <a>Products </a>
        </Link>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
      </nav>
    </div>
  );
}
