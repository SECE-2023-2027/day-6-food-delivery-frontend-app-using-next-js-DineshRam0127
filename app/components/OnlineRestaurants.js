import React from 'react'
import RestaurantCard from './RestaurantCard';

function OnlineRestaurants() {
    const onlineRestaurants = [
        {
            id: 1,
            image: '/img1.jpg',
            name: 'Chinese Wok Express',
            desc: 'Authentic Chinese, Asian fusion, Tibetan delights, Sweet desserts',
            price: '₹210 for two',
        },
        {
            id: 2,
            image: '/img2.jpg',
            name: 'BOX8 - Desi Meals',
            desc: 'Classic North Indian, Biryani specials, Thali combos, Homestyle food',
            price: '₹250 for two',
        },
        {
            id: 3,
            image: '/img3.jpg',
            name: 'Bikanervala Sweets & Snacks',
            desc: 'Traditional sweets, North & South Indian, Savory snacks',
            price: '₹300 for two',
        },
        {
            id: 4,
            image: '/img5.jpg',
            name: 'White Hart Pizza House',
            desc: 'Handcrafted pizzas, Beverages, Gourmet snacks, Juicy burgers',
            price: '₹260 for two',
        },
        {
            id: 5,
            image: '/img6.jpg',
            name: 'Dragon’s Kitchen',
            desc: 'Chinese, Asian, Tibetan, Signature desserts',
            price: '₹210 for two',
        },
        {
            id: 6,
            image: '/img7.jpg',
            name: 'Desi Meal Box',
            desc: 'North Indian, Biryani, Family thalis, Comfort food',
            price: '₹250 for two',
        },
        {
            id: 7,
            image: '/img8.jpg',
            name: 'Bikaner Mithai Ghar',
            desc: 'Sweets, North Indian, South Indian, Street snacks',
            price: '₹300 for two',
        },
        {
            id: 8,
            image: '/img9.jpg',
            name: 'Pizza Junction',
            desc: 'Wood-fired pizza, Cold beverages, Quick snacks, Burger meals',
            price: '₹260 for two',
        },
        {
            id: 9,
            image: '/img10.jpg',
            name: 'MealBox Express',
            desc: 'North Indian, Biryani, Mini thalis, Daily specials',
            price: '₹250 for two',
        },
        {
            id: 10,
            image: '/img11.jpg',
            name: 'Bikaner Royal Sweets',
            desc: 'Premium sweets, North Indian, South Indian, Savory treats',
            price: '₹300 for two',
        },
    ];
    return (
        <div className='my-8'>
            <h1 className='text-2xl font-bold mb-4 px-5'>Restaurants with food delivery</h1>
            <div className='flex flex-wrap justify-between items-start'>
                {onlineRestaurants.map((res,idx) => (
                    <RestaurantCard key={idx} id={res.id} image={res.image} name={res.name} desc={res.desc} price={res.price} />
                ))}
            </div>
        </div>
    )
}

export default OnlineRestaurants