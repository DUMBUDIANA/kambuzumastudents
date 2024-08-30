import React, { useState, useEffect } from 'react';
import CardsData from '../components/CardsStructure.js';
// import Card from '../components/Database/Database.jsx';
import { Link } from "react-router-dom";
import axios from 'axios';


export default function Vans() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchVans();
  }, []);

  const fetchVans = async () => {
    setLoading(true);
  try {
    const response = await axios.get('http://localhost:5000/api/vans');
    setVans(response.data);
  } catch (err) {
    setError('Error fetching vans. Please try again.')
    console.error('Error fetching vans:', err)
  } 
  finally {
    setLoading(false);
  }
  };

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };
  const handleClearFilters = () => {
    setCurrentFilter('all');
  };
  

  const filteredCards = currentFilter === 'all'
  ? vans
  : vans.filter((item) => item.button === currentFilter);

  if(loading) 
    return <div>Loading...</div>;
  if(error)
    return <div>{error}</div>;

  return (
    <div className="cards--width">
      <div className="top-buttons">
        <h1>Explore our van options</h1>
        <div className="button-container">
          <button
            className={`filter-button simple ${currentFilter === 'Simple' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Simple')}
          >
            Simple
          </button>
          <button
            className={`filter-button luxury ${currentFilter === 'Luxury' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Luxury')}
          >
            Luxury
          </button>
          <button
            className={`filter-button rugged ${currentFilter === 'Rugged' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Rugged')}
          >
            Rugged
          </button>

          <button onClick={handleClearFilters} className="link-filter">
          Clear filters
        </button>
        
        </div>
       
      </div>

      <div className="cards">
        {filteredCards.map(item => (
          <div > 
         <Link  key={item.id} to={`/vans/${item.id}`}>
          <CardsData
            key={item.id}
            img={item.image}
            type={item.type}
            price={item.price}
            button={item.button}
            day={item.day}
            color={item.color}
          />
          </Link>
          </div>
        ))}
      </div> 

      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </div>
  );
}


