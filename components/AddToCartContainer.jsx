import React from 'react';
import prime from "@/public/prime-logo.png"
import Image from 'next/image';

const AddToCartContainer = () => {
    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
            <div className='p-4'>
                <Image src={prime} width={40} height={40} alt={"prime"} />
            </div>
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery</span> 30 September - 4 October.<span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Ships from Bajaj OSL Auto Pvt Ltd Kolkata</h1>
                <p className='text-[#147C8F] my-2'>Delivering to Kolkata 700029 - Update location</p>
                <button className='bg-[#FFD814] w-full rounded-full py-2'>Add to Cart</button>
                <button className='bg-[#FEA41D] w-full rounded-full py-2 my-2'>Buy Now</button>
            </div>
        </div>
    )
}

export default AddToCartContainer;
