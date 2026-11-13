import React from 'react';
import { products } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(), 
  }));
}

export default async function ProductDetailPage({ params }: 
  { params: Promise<{ id: string }> }) {
  
  const { id } = await params;
  const product = products.find((p) => p.id == id);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6 md:p-8">
     <Link 
  href="/product" 
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-4 py-2.5 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 mb-6 cursor-pointer group"
>
  <span className=" text-lg transition-transform duration-200 group-hover:-translate-x-1">← Back</span>
  
</Link>

      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        
        <div className="w-full h-72 sm:h-80 bg-gray-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <p className="text-gray-400 text-xs mb-3">ID: {product.id}</p>
        <p className="text-xl font-semibold text-blue-600 mb-4">Price: ${product.price.toFixed(2)}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center">
          <button 
            className="sm:w-2/3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-blue-200 transition-all duration-200 cursor-pointer text-center"
          >
             Buy Now
          </button>
          </div>
      </div>
    </main>
  );
}