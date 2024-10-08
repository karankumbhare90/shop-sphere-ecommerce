// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const { productName, price, category, rating, description, available, image } = product;

    // Format price to two decimal places
    // eslint-disable-next-line react/prop-types
    const productPrice = price.toFixed(2);

    return (
        <div className="max-w-sm flex flex-col gap-2 rounded-md shadow-custom-light bg-white px-4 py-4">
            <img className="w-full h-40 object-contain" src={image} alt={productName} /> {/* Fixed height */}
            <div className="flex flex-col gap-1">
                <div className="text-[18px] font-semibold">{productName.substring(0, 18)}...</div>
                <p className="text-gray-500 text-opacity-80 text-[12px] leading-5">{description.substring(0, 32)}...</p>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">${productPrice}</span>
                <div className="flex items-center space-x-1">
                    <span className="text-yellow-400 text-sm">{"★".repeat(Math.round(rating))}</span>
                    <span className="text-gray-600 text-sm">({rating.toFixed(1)})</span>
                </div>
            </div>
            <div className="flex space-x-2">
                <span className="badge-label">{category}</span>
                <span className={`badge-label ${available ? '' : 'line-through'}`}>
                    {available ? 'Available' : 'Out of Stock'}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
