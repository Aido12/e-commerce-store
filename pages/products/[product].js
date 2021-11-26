import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Header from '../../components/Header';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

// export default function Product() {
//   const router = useRouter();
//   const { product } = router.query;
const name = css`
  font-size: 30px;
  font-family: 'Irish Grover', cursive;
`;
const description = css`
  font-size: 20px;
  font-family: 'Irish Grover', cursive;
`;
const price = css`
  font-size: 18px;
  font-family: 'Irish Grover', cursive;
`;
// const [cart, setCart] = useState(
//   getParsedCookie("cart") || [],
// );

export default function Product(props) {
  const [cart, setCart] = useState(() => {
    if (getParsedCookie('cart') === undefined) {
      setParsedCookie('cart', []);
    } else {
      return getParsedCookie('cart');
    }
  });
  //   const productCookieObject = addToCart.find((cooikeObj) => cookieObj.id === Number(props.singleUser.id))
  // const intialAmount = cart.find(cookieObj) => cookieObj.id ===props.singleUser.id
  const [amountCount, setAmountCount] = useState(0);

  function addToCart() {
    const productId = props.singleProduct.id;
    const productName = props.singleProduct.name;
    const productPrice = props.singleProduct.price;
    const currentCookieArray = getParsedCookie('cart');
    currentCookieArray.push({
      id: productId,
      name: productName,
      price: productPrice,
    });
    setParsedCookie('cart', currentCookieArray);

    setCart(getParsedCookie('cart'));
    console.log(cart);
  }
  return (
    <div>
      <title>single product</title>
      <Header />
      <div css={name}>Name of Whiskey: {props.singleProduct.name}</div>
      <div css={description}>Desription: {props.singleProduct.description}</div>
      <div css={price}>Price: {props.singleProduct.price}</div>
      <img
        src={props.singleProduct.imgFile}
        alt="whiskey"
        width="250px"
        height="250px"
      />
      <button onClick={addToCart}>Add to Cart</button>
      <div>Amount: {amountCount} </div>
      <button onClick={() => setAmountCount(amountCount - 1)}>-</button>
      <button onClick={() => setAmountCount(amountCount + 1)}>+</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');

  const cookies = context.req.cookies.addToCart || '[]';
  const addToCart = JSON.parse(cookies);
  console.log(addToCart);

  const idFromUrl = context.query.product;

  const singleProduct = products.find((product) => {
    return idFromUrl === product.id;
  });
  return {
    props: {
      singleProduct,
    },
  };
}
