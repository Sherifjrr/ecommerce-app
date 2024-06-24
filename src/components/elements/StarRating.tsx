export function StarRating({ rating }: { rating: number }) {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex items-center">
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={index} className="text-yellow-500 text-xl">
          &#9733;
        </span>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={index} className="text-yellow-500 text-xl">
          &#9734;
        </span>
      ))}
      <h3 className="ml-2">{rating}</h3>
    </div>
  );
}
