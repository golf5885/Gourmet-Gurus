import React from 'react';
import DiningHallCard from '../components/DiningHallCards/DiningHallCard.jsx';


export default function Home() {


  const currentHour = new Date().getHours();
  // Define a function to determine the appropriate greeting
  const getGreeting = () => {
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const getUsername = () => {
    return 'Brandon';
  }
  const getRating = () => {
    return (Math.random() * 2) + 3;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <header className="text-center py-4">
        <h1 className="text-2xl" style={{ fontFamily: 'Almendra', fontSize: '30px', fontWeight: '450' }}>{getGreeting()}, {getUsername()}</h1>
      </header>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-1">
          <div>
            <DiningHallCard image={1} name={'De La Guerra'} id={'dlg'} rating={getRating()} />
          </div>
          <div>
            <DiningHallCard image={0} name={'Carillo'} id={'car'} rating={getRating()} />
          </div>
          <div>
            <DiningHallCard image={2} name={'Ortega'} id={'ort'} rating={getRating()} />
          </div>
          <div>
            <DiningHallCard image={3} name={'Portola'} id={'por'} rating={getRating()} />
          </div>
        </div>
      </div>
    </div>
  );
}
