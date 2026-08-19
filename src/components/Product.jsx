import React from 'react'

function Product({productData}) {

  return (
   <div className="grid grid-cols-1 gap-6 p-6 border border-gray-700 rounded-xl bg-gray-900 w-full">

  {/* Image */}
  <div className="flex items-center justify-center">
    <img
      src={productData.image}
      alt={productData.name}
      className="w-48 h-48 object-contain"
    />
  </div>

  

  {/* Actions */}
  <div className="flex flex-col justify-center gap-4">

    <div className="flex items-center gap-3">
      <h3 className="text-xl font-bold">
        PKR {productData.priceCents - 100}
      </h3>

      <del className="text-gray-500">
        PKR {productData.priceCents}
      </del>
    </div>

    <button className="w-full rounded-lg bg-white px-4 py-2 text-black font-medium cursor-pointer">
      Detail Page
    </button>

    <button className="w-full rounded-lg border border-gray-600 px-4 py-2 font-medium cursor-pointer">
      Add to Cart
    </button>

  </div>
</div>
  )
}

export default Product
