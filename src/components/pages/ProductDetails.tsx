import { productPropsTypes } from '../../state/Types'

function ProductDetails({ product }: productPropsTypes) {
  return (
    <div>
      <div className="p-12">
        <h1 className="text-xl font-bold">Product info</h1>
        {Object.entries(product.dimensions)?.map(([key, value]) => (
          <h1 key={key} className="my-6 font-semibold">
            📏 {key.toUpperCase()}: {value}
          </h1>
        ))}
        <h1 className="my-6 font-semibold">
          🔢 Minimum Order Quantity : {product.minimumOrderQuantity}
        </h1>
        <h1 className="my-6 font-semibold">
          🔒 Warranty Information : {product.warrantyInformation}
        </h1>
        <h1 className="my-6 font-semibold"> ⚖️ Weight : {product.weight}</h1>
        <h1 className="my-6 font-semibold"> 🔖 SKU : {product.sku}</h1>
      </div>
    </div>
  )
}

export default ProductDetails
