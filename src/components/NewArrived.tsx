import ProductCard from './elements/ProductCard';
import { useGetAllProductsQuery } from '../state/apiSlice';
import { productTypes } from './elements/ProductCard';

function NewArrived() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const allProducts = data;
  console.log(allProducts);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mt-16 mb-5">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-wrap my-5">
        {allProducts?.products
          .slice(0, 4)
          .map((product: productTypes) => (
            <ProductCard
              key={product.id}
              title={product.title}
              rating={product.rating}
              price={product.price}
              thumbnail={product.thumbnail}
              id={0}
            />
          ))}
      </div>
      <button
        type="button"
        className="rounded-3xl py-3 px-14 text-black my-5 border-gray-200 border-2 center w-56"
      >
        View All
      </button>
    </section>
  );
}

export default NewArrived;
