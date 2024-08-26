import Image from 'next/image';
import React from 'react';
import Rating from './shared/Rating';

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    console.log(singleProduct)
    return (
        <div className='w-[80%] mx-auto'>
            <div>
                {
                    singleProduct.map((el: any) => {
                        return (
                            <div className='flex mt-10'>
                                <Image className='mix-blend-multiply p-4' src={el.image} height={500} width={400} alt={"product"} />
                                <div>
                                    <h1 className='font-bold text-lg'>{el.title}</h1>
                                    <p>{`${el.description.substring(0, 50)}...`}</p>
                                    <Rating product={el} />
                                    <h1 className='font-bold'>{`$${el.price}`}</h1>
                                    <div>
                                        <h1 className='font-bold text-sm'>About this item</h1>
                                        <li>
                                            {el.description}
                                        </li>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleProduct;
