import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'
import { ADD_CAR, GET_CARS, GET_PERSON } from '../Gqlqueries/gqlqueries'




function PersonList({personId}) {


    const { loading, error, data } = useQuery(GET_CARS, {
        fetchPolicy: 'cache-and-network'
        });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const cars = data.cars.filter(car => car.personId === personId);
   

  return (



      
<>
      
        

        {cars.map(car => (
                           <div className='carcard' key={car.id}>
                           <table>
                            
                            <td>
                                {car.year}
                            </td>
                
                            <td>
                                {car.make}
                            </td>
                
                            <td>
                                {car.price}
                            </td>
                            <td>
                                edit
                            </td>
                
                            <td>
                                delete
                            </td>
                           </table>
                        </div>
                        ))}




</>    
    
  
  
  )

}

export default PersonList