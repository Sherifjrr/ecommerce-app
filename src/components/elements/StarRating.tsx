import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

export function StarRating({ rating }: { rating: number }) {
  const filledStars = Math.floor(rating)
  const emptyStars = 5 - filledStars

  return (
    <div className="flex flex-nowrap items-center">
      {Array.from({ length: filledStars }, (_, index) => (
        <FaStar key={index} className="text-xl text-yellow-500" />
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaRegStar key={index} className="text-xl text-yellow-500" />
      ))}
      <h3 className="ml-2 font-semibold">{rating}/5</h3>
    </div>
  )
}
