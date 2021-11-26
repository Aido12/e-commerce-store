// import { css } from '@emotion/react';
// // import Cookies from 'js-cookie';
// import { useState } from 'react';
// import Header from '../../components/Header';
// import { getParsedCookie, setParsedCookie } from '../../util/cookies';

// const name = css`
//   font-size: 30px;
//   font-family: 'Irish Grover', cursive;
// `;
// const description = css`
//   font-size: 20px;
//   font-family: 'Irish Grover', cursive;
// `;
// const price = css`
//   font-size: 18px;
//   font-family: 'Irish Grover', cursive;
// `;
// export default function Product(props) {
//   return (
//     <div>
//       <title>single product</title>
//       <Header />
//       <div css={name}>Name of Whiskey: {props.singleProduct.name}</div>
//       <div css={description}>Desription: {props.singleProduct.description}</div>
//       <div css={price}>Price: {props.singleProduct.price}</div>
//       <img
//         src={props.singleProduct.imgFile}
//         alt="whiskey"
//         width="250px"
//         height="250px"
//       />
//       <button>{true: addToCart}</button>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { products } = await import('../../util/database');
//   const cookies = context.req.cookies.addToCart || '[]';
//   const addToCart = JSON.parse(cookies);
//   console.log(addToCart);

//   const idFromUrl = context.query.product;

//   const singleProduct = products.find((product) => {
//     return idFromUrl === product.id;
//   });
//   return {
//     props: {
//       singleProduct,
//     },
//   };
// }
