import { css } from '@emotion/react';
import Link from 'next/link';
import Header from '../../components/Header';

const mainPage1 = css`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  grid-gap: 150px 200px;

  li {
    list-style-type: none;
  }

  a {
    /* display: flex;
    text-align: center;
    justify-content: space-around;
    margin: auto;
    margin-top: -35px; */

    font-size: 15px;
    font-family: 'Irish Grover', cursive;
    /* border-radius: 15px;
    padding: 20px 20px; */
  }
`;

const para = css`
  display: flex;
  margin-left: 700px;
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: cursive;
`;

const footerStyle = css`
  height: 100px;
  display: flex;
  background-color: #c4c4c4;
  text-align: center;
`;

export default function Products(props) {
  return (
    <div>
      <Header />

      <div>
        <ul css={mainPage1}>
          {props.products.map((product) => {
            return (
              <li key={`product-li-${product.id}`}>
                <img
                  src={product.imgFile}
                  alt="whiskey"
                  width="250px"
                  height="250px"
                />

                <Link href={`/products/${product.id}`}>
                  <a>{product.name}: Find out more</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p css={para}>
        “There can be nothing more frequent than an occasional drink.”
        <br />
        Oscar Wilde
      </p>
      <footer css={footerStyle}>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
      </footer>
    </div>
    // </div>
  );
}

export async function getServerSideProps() {
  const { products } = await import('../../util/database');

  console.log(products);
  return {
    props: {
      products,
    },
  };
}
