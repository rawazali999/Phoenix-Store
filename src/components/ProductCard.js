import React from 'react'
import { Link } from 'react-router-dom'
import { delimiter } from '../utilities/delimiter'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="max-w-xs mx-auto overflow-hidden border-2 border-custom1 bg-white rounded-2xl shadow-md">
    <div className="px-4 py-2">
      <h1 className="text-2xl font-bold text-gray-800 uppercase">{delimiter(product.title,20)}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{delimiter(product.description,50)}</p>
    </div>
    <img className="object-contain w-full h-48 mt-2" src={product.image} alt="NIKE AIR" />
    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 className="text-lg font-bold text-white">{product.rating.rate}</h1>
      <label className="px-2 py-1 text-xs font-semibold text-white uppercase">{product.category}</label>
    </div>
    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 className="text-lg font-bold text-white">{product.price} $</h1>
      <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
    </div>
  </Link>
  )
}
