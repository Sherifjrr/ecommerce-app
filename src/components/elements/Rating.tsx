import { productPropsTypes } from '../../state/Types'
import { StarRating } from '../elements/StarRating'
import { format, parseISO } from 'date-fns'

function Rating({ product }: productPropsTypes) {
  console.log(product)

  return (
    <section className="mx-12 p-5 py-12">
      <div>
        <h1 className="text-xl font-bold">All Reviews</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        {product.reviews?.map(
          (review: productPropsTypes['product']['review'], index) => (
            <div
              key={index}
              className="my-8 w-full rounded-2xl border border-gray-200 p-5 transition-colors duration-500 ease-in-out hover:border-gray-300 md:w-custom-4"
            >
              <StarRating rating={review.rating} />
              <h1 className="my-4 font-semibold">{review.reviewerName}</h1>
              <p className="my-4">"{review.comment}"</p>
              <h2 className="my-4">
                {' '}
                Posted On {format(parseISO(review.date), 'MMMM dd, yyyy HH:mm')}
              </h2>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Rating
