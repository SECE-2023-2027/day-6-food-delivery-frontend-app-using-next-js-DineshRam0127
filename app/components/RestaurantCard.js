import React from 'react'
import Link from 'next/link'

function RestaurantCard({ id, image, name, desc, price }) {
    return (
        <Link href={`/restaurant/${id}`} className='no-underline text-black'>
            <div className='w-64 min-w-[256px] m-2 rounded shadow hover:shadow-md'>
                <img src={image} alt={name} className='w-full h-40 object-cover rounded-t' />
                <div className='p-2'>
                    <h2 className='font-semibold'>{name}</h2>
                    {desc && <p className='text-sm text-gray-600'>{desc}</p>}
                    {price && <p className='text-sm text-gray-800 mt-1'>{price}</p>}
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard