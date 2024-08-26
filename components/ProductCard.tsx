"use client";
import Image from 'next/image'
import React from 'react'
import Rating from './shared/Rating'
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${product.id}`)
    }
    return (
        <div className='cursor-pointer' onClick={handleClick}>
            <div className='bg-gray-100 flex items-center justify-center overflow-hidden h-[250px]'>
                <Image className='mix-blend-multiply p-5' src={product.image} alt={product.title} height={200} width={200} />
            </div>
            <h1 className='font-bold'>{product.title}</h1>
            <p>{`${product.description.substring(0, 50)}...`}</p>
            <Rating product={product} />
            <p className='font-bold'>{`$${product.price}`}</p>
        </div>
    )
}

export default ProductCard