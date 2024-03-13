'use client'
import React from 'react'
import './Page.css'; // Import CSS file for styling
import FoodItemCard from '../../components/FoodCards/FoodItemCard';

const Page = () => {
    return (
        <div className="page-container">
            <header className="text-center py-4">
                <h1 className="text-2xl" style={{ fontFamily: 'Almendra', fontSize: '30px', fontWeight: '400', color: 'black' }}>Your Favorites</h1>
            </header>
            <div className="food-cards-container">
                <FoodItemCard isReadOnly={false} id={'lemon'} img='https://www.marionskitchen.com/wp-content/uploads/2019/09/Chinese-BBQ-Pork-Steamed-Buns4.jpg' name='Steamed Pork Buns' />

            </div>
        </div>
    )
}

export default Page;
