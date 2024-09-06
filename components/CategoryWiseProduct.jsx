import Image from 'next/image'
import React, { Fragment } from 'react'
import Rating from './Rating'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'
import Link from 'next/link'

const CategoryWiseProduct = ({ data }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToCart(data))
    }
    return (
        <div className='border border-gray-300 p-2 bg-white'>
            <Link href={`/product/${data.id}`}>
                <h1 className='font-bold'>{data.category}</h1>
                <div className='mt-2 h-[250px] overflow-hidden flex items-center justify-center'>
                    <Image src={data.image} width={200} height={150} alt='' className='p-5' />
                </div>
                <div>
                    <h1>{data.title.substring(0, 30)}...</h1>
                    <Rating product={data} />
                </div>
            </Link>
            <div className='py-2'>
                <button className='w-full py-2 rounded-md bg-[#FFD814]' onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default CategoryWiseProduct
