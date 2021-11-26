import Link from 'next/link';
// import { css } from '@emotion/react';
import Header from '../components/Header';

export default function checkout(props) {
  return (
    <div>
      <Header />

      <h2>Cart</h2>
      {/* <ul>
        {props.products.map((product) => {
          return (
            <li key={`product-li-${product.id}`}>
              {product.name}:
              <Link href={`/products/${product.id}`}>
                <a>{product.name} </a>
                <a>{product.price} </a>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../util/database');

  const addToCart = context.req.cookies;
  console.log(addToCart);

  return {
    props: {
      products,
    },
  };
}
