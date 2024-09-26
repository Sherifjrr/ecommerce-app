import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductSkeleton = () => {
  return (
    <div className="m-6 w-80 rounded-2xl p-1">
      <div className="mb-2 w-full cursor-pointer">
        <Skeleton height={250} />
      </div>
      <div className="w-4/5 p-3">
        <div className="mb-10 flex h-28 flex-col gap-y-4">
          <Skeleton width={150} height={24} />
          <Skeleton width={100} height={20} />
          <Skeleton width={80} height={24} />
        </div>
        <div className="w-full">
          <Skeleton width={120} height={40} className="rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

export default ProductSkeleton
