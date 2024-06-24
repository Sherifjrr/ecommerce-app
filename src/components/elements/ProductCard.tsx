import { StarRating } from './StarRating';

export interface productTypes {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

function ProductCard({ title, rating, price, thumbnail }: productTypes) {
  return (
    <div className="m-6 p-1 rounded-2xl">
      <div className="w-63 mb-2">
        <img src={thumbnail} alt={title} className="rounded-2xl bg-black" />
      </div>
      <div className="px-6 py-3">
        <h1 className="text-xl font-bold my-1">{title}</h1>
        <StarRating rating={rating} />
        <h1 className="text-xl font-bold my-1">${price}</h1>
      </div>
    </div>
  );
}

export default ProductCard;
