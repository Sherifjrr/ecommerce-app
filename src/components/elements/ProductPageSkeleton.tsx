import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton from 'react-loading-skeleton'

const ProductPageSkeleton = () => {
  return (
    <section className="flex flex-wrap p-5 lg:p-8">
      <div className="flex w-full flex-wrap-reverse justify-center p-1 md:p-5 lg:w-1/2 lg:flex-nowrap lg:justify-around">
        <div className="flex w-full justify-center lg:w-1/4 lg:flex-col">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                width={100}
                height={100}
                className="m-2 rounded-2xl bg-gray-100"
              />
            ))}
        </div>
        <div className="flex w-full items-center md:w-custom-3">
          <Skeleton
            width={400}
            height={400}
            className="rounded-2xl bg-gray-200"
          />
        </div>
      </div>

      <div className="flex w-full flex-col justify-around p-1 lg:w-1/2">
        <Skeleton width={300} height={40} className="mb-4" />
        <Skeleton width={150} height={24} className="mb-4" />
        <Skeleton width={100} height={20} className="mb-4" />

        <div className="mb-4 flex items-center gap-x-5">
          <Skeleton width={80} height={24} />
          <Skeleton width={60} height={20} />
          <Skeleton width={50} height={24} />
        </div>

        <Skeleton width={100} height={24} className="mb-4" />
        <Skeleton width={400} height={60} className="mb-4" />
        <Skeleton width={200} height={40} className="mb-4 rounded-3xl" />

        <Skeleton width={150} height={30} className="mb-4" />
        <Skeleton
          width={350}
          height={200}
          className="rounded-2xl bg-gray-200"
        />
      </div>
    </section>
  )
}

export default ProductPageSkeleton
