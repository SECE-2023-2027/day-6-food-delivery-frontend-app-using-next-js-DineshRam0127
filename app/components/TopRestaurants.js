'use client';
import React from 'react';
import RestaurantCard from './RestaurantCard';

const topRestaurants = [
    { id: 11, image: '/img1.jpg', name: 'Chinese Wok' },
    { id: 12, image: '/img2.jpg', name: 'BOX8 - Desi Meals' },
    { id: 13, image: '/img3.jpg', name: 'Bikanervals' },
    { id: 14, image: '/img4.jpg', name: 'White Hart Pizza' },
    { id: 15, image: '/img5.jpg', name: 'Chicago Pizza' },
    { id: 16, image: '/img6.jpg', name: 'Tandoori Treats' },
    { id: 17, image: '/img7.jpg', name: 'Spice Villa' },
    { id: 18, image: '/img8.jpg', name: 'Urban Bites' },
    { id: 19, image: '/img9.jpg', name: 'Grill House' },
];

function TopRestaurants() {
return (
    <div>
        <h1 className='text-2xl font-bold mb-4 px-5'>Top restaurants </h1>
        <div className='flex overflow-x-auto' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {topRestaurants.map((res, idx) => (
                <RestaurantCard key={idx} id={res.id} image={res.image} name={res.name} />
            ))}
        </div>
    </div>
);
}

export default TopRestaurants;
