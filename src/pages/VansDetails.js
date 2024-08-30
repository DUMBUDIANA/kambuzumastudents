import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Database/Database';
import arrow from "../images 2/Arrow 1.png";

export default function VansDetails () {
  
  const {id} = useParams();
  const van = Card.find (item => item.id === parseInt(id));
  return(
    <>
    <div className='allcars--2'>
       
      <div>

        <Link to="/Vans" className='back'><img src={arrow} alt="arrow" /><span>Back to all vans</span></Link>

              <img className='detail-image' src={require("../Images/" + van.image)} alt=''/>
             <div className="button2" style={{backgroundColor: van.color}}>
             <Link className='detail-btn' to="../pages/VansDetails.js">{van.button}</Link>
             </div>

            <h2>{van.type}</h2>

            <p><span className='bold'>${van.price}</span>{van.day}</p>
           
            <p className='description'>{van.description}</p>

           <div className="button3">
            <Link to="/Login">Rent this van</Link>

            </div>
      </div>

    </div>
    
    <div className="footer">
      <p>Ⓒ 2022 #VANLIFE</p>
    </div>
  </>
  )
}