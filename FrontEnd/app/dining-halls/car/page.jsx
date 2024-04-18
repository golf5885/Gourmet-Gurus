'use client'
import React from 'react'
import FoodItemCard from '../../../components/FoodCards/FoodItemCard';
import './Page.css'; // Import CSS file for styling
import menu from "./menu.json";

const Page = () => {

    const namesArray = menu.map(item => item.name);
    return (
        <div className="page-container">
            <header className="text-center py-4">
                <h1 className="text-2xl" style={{ fontFamily: 'Almendra', fontSize: '30px', fontWeight: '400' }}>Welcome to Carillo Dining Commons</h1>
            </header>
            <div className="food-cards-container">
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://www.skinnytaste.com/wp-content/uploads/2023/09/Stovetop-Minestrone-Soup-7.jpg' name={namesArray[0]} />
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://natashaskitchen.com/wp-content/uploads/2020/09/Chicken-Lasagna-10.jpg' name={namesArray[1]} />
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://www.recipetineats.com/wp-content/uploads/2021/10/Garlic-Sauteed-Green-Beans_08-SQ.jpg' name={namesArray[2]} />
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://www.allrecipes.com/thmb/c_2gXiAwkO6u1UJCY-1eAVCy0h0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54679_perfect-baked-potato-Rita-1x1-1-91711252bb3740088c8ea55c5f9bef1c.jpg' name={namesArray[3]} />
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://cdn.media.amplience.net/i/japancentre/recipe-1668-japanese-baked-sweet-potato/Japanese-baked-sweet-potato?$poi$&w=700&h=410&sm=c&fmt=auto' name={namesArray[4]} />
                <FoodItemCard isReadOnly={true} id={'lemon'} img='https://life-in-the-lofthouse.com/wp-content/uploads/2014/08/freezer-burritos-LifeInTheLofthouse.jpg' name={namesArray[5]} />
            </div>
        </div>
    )
}

export default Page;
