'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function RestaurantDetails() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState(null);

  const allRestaurants = [
    { id: 11, image: '/img1.jpg', name: 'Chinese Wok', desc: 'Authentic Chinese cuisine', price: '₹220 for two', rating: 4.2, deliveryTime: '30-35 mins' },
    { id: 12, image: '/img2.jpg', name: 'BOX8 - Desi Meals', desc: 'North Indian, Biryani specials', price: '₹250 for two', rating: 4.1, deliveryTime: '25-30 mins' },
    { id: 13, image: '/img3.jpg', name: 'Bikanervals', desc: 'Traditional sweets, North Indian', price: '₹300 for two', rating: 4.3, deliveryTime: '20-25 mins' },
    { id: 14, image: '/img4.jpg', name: 'White Hart Pizza', desc: 'Handcrafted pizzas, Beverages', price: '₹260 for two', rating: 4.0, deliveryTime: '35-40 mins' },
    { id: 15, image: '/img5.jpg', name: 'Chicago Pizza', desc: 'Deep dish pizza, Italian', price: '₹280 for two', rating: 4.2, deliveryTime: '40-45 mins' },
    { id: 16, image: '/img6.jpg', name: 'Tandoori Treats', desc: 'Tandoori specialties, Kebabs', price: '₹320 for two', rating: 4.4, deliveryTime: '30-35 mins' },
    { id: 17, image: '/img7.jpg', name: 'Spice Villa', desc: 'Spicy Indian curries', price: '₹290 for two', rating: 4.1, deliveryTime: '25-30 mins' },
    { id: 18, image: '/img8.jpg', name: 'Urban Bites', desc: 'Modern fusion cuisine', price: '₹350 for two', rating: 4.3, deliveryTime: '35-40 mins' },
    { id: 19, image: '/img9.jpg', name: 'Grill House', desc: 'Grilled specialties, BBQ', price: '₹380 for two', rating: 4.5, deliveryTime: '40-45 mins' },
    { id: 1, image: '/img1.jpg', name: 'Chinese Wok Express', desc: 'Authentic Chinese, Asian fusion', price: '₹210 for two', rating: 4.2, deliveryTime: '30-35 mins' },
    { id: 2, image: '/img2.jpg', name: 'BOX8 - Desi Meals', desc: 'North Indian, Biryani specials', price: '₹250 for two', rating: 4.1, deliveryTime: '25-30 mins' },
    { id: 3, image: '/img3.jpg', name: 'Bikanervala Sweets & Snacks', desc: 'Traditional sweets, North Indian', price: '₹300 for two', rating: 4.3, deliveryTime: '20-25 mins' },
    { id: 4, image: '/img5.jpg', name: 'White Hart Pizza House', desc: 'Handcrafted pizzas, Beverages', price: '₹260 for two', rating: 4.0, deliveryTime: '35-40 mins' },
    { id: 5, image: '/img6.jpg', name: 'Dragon\'s Kitchen', desc: 'Chinese, Asian, Tibetan', price: '₹210 for two', rating: 4.2, deliveryTime: '30-35 mins' },
    { id: 6, image: '/img7.jpg', name: 'Desi Meal Box', desc: 'North Indian, Biryani, Thalis', price: '₹250 for two', rating: 4.1, deliveryTime: '25-30 mins' },
    { id: 7, image: '/img8.jpg', name: 'Bikaner Mithai Ghar', desc: 'Sweets, North Indian', price: '₹300 for two', rating: 4.3, deliveryTime: '20-25 mins' },
    { id: 8, image: '/img9.jpg', name: 'Pizza Junction', desc: 'Wood-fired pizza, Beverages', price: '₹260 for two', rating: 4.0, deliveryTime: '35-40 mins' },
    { id: 9, image: '/img10.jpg', name: 'MealBox Express', desc: 'North Indian, Biryani, Thalis', price: '₹250 for two', rating: 4.1, deliveryTime: '25-30 mins' },
    { id: 10, image: '/img11.jpg', name: 'Bikaner Royal Sweets', desc: 'Premium sweets, North Indian', price: '₹300 for two', rating: 4.3, deliveryTime: '20-25 mins' },
  ];

  useEffect(() => {
    if (params.id) {
      const foundRestaurant = allRestaurants.find(r => r.id === parseInt(params.id));
      setRestaurant(foundRestaurant);
    }
  }, [params.id]);

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Restaurant Not Found</h1>
        <Link href="/" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-4">
        Back to Home
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-gray-600 mb-4">{restaurant.desc}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-orange-500">{restaurant.deliveryTime}</div>
              <div className="text-sm text-gray-600">Delivery</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-blue-500">{restaurant.price}</div>
              <div className="text-sm text-gray-600">Price</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-xl font-bold text-purple-500">₹50</div>
              <div className="text-sm text-gray-600">Delivery Fee</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-3">Popular Items</h2>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Special Biryani</span>
                  <span className="font-bold text-orange-500">₹299</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Chef's Special</span>
                  <span className="font-bold text-orange-500">₹399</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Combo Meal</span>
                  <span className="font-bold text-orange-500">₹199</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-3">Opening Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 12:00 AM</span>
                </div>
                <div className="mt-3 p-2 bg-green-50 rounded">
                  <span className="text-green-700 font-semibold">🟢 Open Now</span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-6">
            Order Now - {restaurant.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
