// import SearchProductCard from './_components/ProductCard';
// import ProductCard from './_components/ProductCard';
// import { getBestSellerProducts, getOrderInfo } from './actions';

// async function BestSeller() {
//   const orderinfoData = await getOrderInfo();
//   const orderData = orderinfoData.slice(0, 4);
//   const BestSellerProductsData = await getBestSellerProducts(orderData);

//   return (
//     <section className="lg:w-[1240px] mx-auto mt-[140px] mb-[180px] px-5 lg:px-0" id="bestSeller">
//       <h2 className="text-[32px] text-center mb-[34px]">베스트 셀러</h2>
//       <div className="grid grid-cols-2 lg:gap-x-[20px] lg:gap-y-[24px] justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
//         {BestSellerProductsData.map((product) => (
//           <SearchProductCard key={product.product_id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default BestSeller;
