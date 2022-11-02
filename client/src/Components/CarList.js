import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import UpdateCarForm from './UpdateCarForm';
import CarItem from './CarItem';
import { Link } from 'react-router-dom';




function CarList({personId,iseditmode}) {


    const { loading, error, data } = useQuery(GET_CARS, {
        fetchPolicy: 'cache-and-network'
        });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const cars = data.cars.filter(car => car.personId === personId);
   

  return (



      

        <div  >
        
       

        {cars.map(car => (
                           <CarItem car={car}/>
                        ))}







  </div>
         
    
  
  
  )

}

export default CarList