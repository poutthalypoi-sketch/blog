import Link from 'next/link';
import { products } from './data';

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
     
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
      </div>

      {/* ຈັດ Card ໃຫ້ລຽງເປັນ Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/product/${product.id}`} 
            className="block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 overflow-hidden"
          >
            {/* ຮູບພາບ */}
            <div className="w-full h-48 bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-600 mb-2">Product {product.id}</h2>
              <p className="text-gray-700 font-medium mb-3">
                {product.name}
              </p>
              <p className="text-black font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
              <span className="text-sm text-gray-500 line-clamp-2">
                {product.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}