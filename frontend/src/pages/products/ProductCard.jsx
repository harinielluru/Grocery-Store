import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-60 sm:justify-center gap-3">
                <div className="sm:h-50 sm:w-52 sm:flex-shrink-0 border rounded-md overflow-hidden">
                    <Link to={`/products/${product._id}`}>
                        <img
                            src={`${getImgUrl(product?.coverImage)}`}
                            alt={product?.title || "Product image"}
                            className="w-full h-52 sm:h-full object-cover p-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>

                <div>
                    <Link to={`/products/${product._id}`}>
                        <h3 className="text-lg font-semibold hover:text-blue-400 mb-2">
                            {product?.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">
                        {product?.description.length > 70 ? `${product.description.slice(0, 70)}...` : product?.description}
                    </p>
                    <p className="font-medium mb-4">
                        {product?.newPrice}/- <span className="line-through font-normal ml-2"> {product?.oldPrice}/-</span>
                    </p>
                    <button 
                        onClick={() => handleAddToCart(product)}
                        className="btn-primary bg-blue-500 hover:bg-blue-500 px-4 py-1 flex items-center gap-1 text-sm text-white rounded">
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
