import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'
import PersonList from './PersonList';
import CarList from './CarList';
import CarItem from './CarItem';
import DetailCarItem from './DetailCarItem';
import { Link } from 'react-router-dom';




function DetailCar({data}) {





  return (

    <>
 
            <div className='recordcard'>
          
          <div className='recheading'>
            <h4 className='m0'>{data.personWithCars.person.firstName} {data.personWithCars.person.lastName}</h4> 
            <Link to={`/`}>Back to home</Link>
        </div>

        


        {data.personWithCars.cars.map(car => (
                           <DetailCarItem car={car}/>
                        ))}
      



  
         </div>
        
    
    </>

  )

}

export default DetailCar